#!/bin/sh

<<XXX
  SIMPLE_OPTIMIZATIONS
  ADVANCED_OPTIMIZATIONS
XXX
 
echo
echo

echo "---------Dependency tree ---------"
./closure-library/closure/bin/build/closurebuilder.py \
  --root=./closure-library/ \
  --root=./web/ \
  --namespace="nx.Main"
   
echo
echo
  
echo "---------Compilation starts ---------"
./closure-library/closure/bin/build/closurebuilder.py \
  --root=./closure-library/ \
  --root=./web/ \
  --namespace="nx.Main" \
  --output_mode=compiled \
  --compiler_jar=./compiler.jar \
  --compiler_flags="--compilation_level=SIMPLE_OPTIMIZATIONS" \
  > z___next.min.js
  
  
echo
echo




