#!/bin/bash

CUR_DIR=$(pwd)
cd $CUR_DIR
ALL_DIRS=$(find . -type d)
for d in $ALL_DIRS; do
    cd $CUR_DIR/$d
    for i in *.jpg; do
        echo "Convert $i"
        cwebp -q 60 $i -o "${i%.*}.webp"
    done
done