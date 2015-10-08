#!/bin/bash
mkdir tmp

echo "Looking for TODO..."
grep -Enor --include=*.html ".{0,15}TODO.{0,15}" ../../builds/dev | grep -Evf exclude_todo.txt >> tmp/errors.txt
echo "Looking for PLACEHOLDER..."
grep -Enor --include=*.html ".{0,15}PLACEHOLDER.{0,15}" ../../builds/dev | grep -Evf exclude_placeholder.txt >> tmp/errors.txt
echo "Looking for NOTE..."
grep -Enor --include=*.html ".{0,15}NOTE.{0,15}" ../../builds/dev | grep -Evf exclude_note.txt >> tmp/errors.txt
echo ""

cat tmp/errors.txt >&2
rm -rf tmp
