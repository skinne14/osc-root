#!/bin/bash
mkdir tmp

echo "Looking for unrendered markdown links..."
grep -Enor --include=*.html "\[.*\]\(.*\)" ../../builds/dev | grep -Evf exclude_md_links.txt >> tmp/errors.txt
echo "Looking for braces (relics of liquid tags, kramdown)..."
grep -Enor --include=*.html ".{0,15}[{}].{0,15}" ../../builds/dev | grep -Evf exclude_braces.txt >> tmp/errors.txt
echo ""

cat tmp/errors.txt >&2
rm -rf tmp
