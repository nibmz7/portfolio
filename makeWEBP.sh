#!/bin/bash
DIR="$1"
for file in "$DIR"/*
do    
  name=$(basename "$file")
  if [[ $name == *.png ]]; then
    cwebp -q 60 "$DIR/$name" -o "$DIR/${name%%.*}".webp
    echo "converted ${name}"
    fi
done
