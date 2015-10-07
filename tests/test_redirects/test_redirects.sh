#!/bin/bash
set -e
mkdir -p tmp

echo "...Retrieving sitemap (osc.hul.harvard.edu)"
curl --silent --show-error --output tmp/sitemap.xml "https://osc.hul.harvard.edu/sitemap.xml"

echo "...Parsing the file"
cat tmp/sitemap.xml | grep \<loc\> tmp/sitemap.xml | sed 's/.*<loc>//' | sed 's|</loc>||' > tmp/sitemap.txt
grep -v "osc.hul.harvard.edu/liblab" tmp/sitemap.txt > tmp/osc-root.txt
grep -v -x -f intentional404.txt tmp/osc-root.txt > tmp/keep.txt
### Add trailing slash if needed
while IFS= read -r LINE; do
    length=${#LINE}
    last_char=${LINE:length-1:1}
    [[ $last_char != "/" ]] && LINE="$LINE/";
    echo "$LINE" >> tmp/slashed.txt
done < tmp/keep.txt
sed 's|https://osc|http://osc-local|g' tmp/slashed.txt > tmp/test.txt

echo "...Checking links"
while IFS= read -r LINE; do
    response=$(curl -L --write-out %{http_code} --silent --output /dev/null $LINE)
    echo -e "$LINE\t$response" >> tmp/results.txt
    printf "."
done < tmp/test.txt
echo ""

echo "Preparing report"
echo "OSC-ROOT URL Mapping from Drupal site to Jekyll site" > report.txt
echo "$(date)" >> report.txt
echo "" >> report.txt
COUNT=$(grep -c "404" tmp/results.txt)
echo "Unintentional 404s: $COUNT" >> report.txt
COUNT=$(grep -c "200" tmp/results.txt)
echo "Success: $COUNT" >> report.txt
echo "" >> report.txt

echo "********************************" >> report.txt
echo "Unintentional 404s" >> report.txt
echo "********************************" >> report.txt
grep "404$" tmp/results.txt | sed -E 's/[[:space:]]404//g' >> report.txt
echo "" >> report.txt

echo "********************************" >> report.txt
echo "Success" >> report.txt
echo "********************************" >> report.txt
grep "200$" tmp/results.txt | sed -E 's/[[:space:]]200//g' >> report.txt
echo "" >> report.txt

rm -r tmp
echo "Complete!"
