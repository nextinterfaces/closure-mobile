#!/bin/sh

<<XXX
  SIMPLE_OPTIMIZATIONS
  ADVANCED_OPTIMIZATIONS
XXX
 
echo
echo

echo "---------Dependency tree ---------"
../closure-library/closure/bin/build/closurebuilder.py \
  --root=../closure-library/ \
  --root=../next/ \
  --namespace="nx.Main"
   
echo
echo
  
echo "---------Compilation starts ---------"
../closure-library/closure/bin/build/closurebuilder.py \
  --root=../closure-library/ \
  --root=../next/ \
  --namespace="nx.Main" \
  --output_mode=compiled \
  --compiler_jar=../compiler.jar \
  --compiler_flags="--compilation_level=ADVANCED_OPTIMIZATIONS" \
  > next.out.js
  
  
echo
echo




