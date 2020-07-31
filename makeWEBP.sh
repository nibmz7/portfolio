#!/bin/bash
DIR="$1"
for file in "$DIR"/png/*
do    
  name=$(basename "$file")
  if [[ $name == *.png ]]; then
    cwebp -q 100 -lossless -resize 0 500 "$DIR/png/$name" -o "$DIR/webp/${name%%.*}".webp
    echo "converted ${name}"
    fi
done
