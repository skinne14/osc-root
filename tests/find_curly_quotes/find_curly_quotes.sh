#!/bin/bash
mkdir tmp

echo "Looking for curly quotes and apostrophes..."
grep -Enor --include=*.html ".{0,15}[“”’‘].{0,15}" ../../app/ >> tmp/errors.txt
grep -Enor --include=*.md ".{0,15}[“”’‘].{0,15}" ../../app/ >> tmp/errors.txt
grep -Enor --include=*.txt ".{0,15}[“”’‘].{0,15}" ../../app/ >> tmp/errors.txt

echo ""

cat tmp/errors.txt >&2
rm -rf tmp
