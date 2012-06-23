#!/bin/sh
echo "recursively removing .svn folders from"
pwd
rm -rf `find . -type d -name .svn`


echo "recursively removing .DS_Store folders from"
pwd
rm -rf `find . -type d -name .DS_Store`