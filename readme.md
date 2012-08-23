[![build status](https://secure.travis-ci.org/SportZing/node-exists-patch.png)](http://travis-ci.org/SportZing/node-exists-patch)
# exists-patch

A two-way patch for Node.js' (fs/path).exists(Sync) functions.

__Note:__ This patch is intended to be a _temporary_ solution until everyone can get up-to-date on this change. It is not meant as a permanent fix so you can ignore the problem. Please update your code...

## Install

```bash
$ npm install exists-patch
```

## Usage

```javascript
var patch = require('exists-patch');

// Coding for a new version (>=0.8) of Node?
// Bring older versions up-to-date to be backward compatable.
patch.patchForward();
fs.exists(...);

// Using a module that isn't up-to-date yet?
// Use the patch to avoid those annoying warning messages or losing
// support when path.exists is removed completely.
patch.patchBackward();
path.exists(...);

// Just want to be thorough without worrying about the specific use-cases?
// Patch both ways!
patch.patch();
```

## MIT License

Copyright (c) 2012 James Brumond

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

