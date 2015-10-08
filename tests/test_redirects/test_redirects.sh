#!/bin/bash
mkdir -p tmp

echo "Retrieving sitemap (osc.hul.harvard.edu)..."
curl --silent --show-error --output tmp/sitemap.xml "https://osc.hul.harvard.edu/sitemap.xml"

echo "Parsing the file..."
cat tmp/sitemap.xml | grep \<loc\> tmp/sitemap.xml | sed 's/.*<loc>//' | sed 's|</loc>||' > tmp/sitemap.txt
grep -v "osc.hul.harvard.edu/liblab" tmp/sitemap.txt > tmp/osc-root.txt
grep -v -x -f intentional404.txt tmp/osc-root.txt > tmp/keep.txt
sed 's|https://osc|http://osc-local|g' tmp/keep.txt > tmp/test.txt

echo "Checking links..."
while IFS= read -r LINE; do
    response=$(curl -L --write-out %{http_code} --silent --show-error --output /dev/null $LINE)
    echo -e "$LINE\t$response" >> tmp/results.txt
    printf "."
done < tmp/test.txt
echo ""

echo "Preparing report..."
echo ""
echo "OSC-ROOT URL Mapping from Drupal site to Jekyll site"
echo "********************************"
COUNT=$(grep -c "404" tmp/results.txt)
echo "Unintentional 404s: $COUNT"
COUNT=$(grep -c "200" tmp/results.txt)
echo "Success: $COUNT"
echo ""

grep "404$" tmp/results.txt | sed -E 's/[[:space:]]404//g' >> tmp/404.txt
cat tmp/404.txt >&2

rm -r tmp
