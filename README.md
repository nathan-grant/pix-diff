Pix-Diff
==========

A lightweight protractor plugin for image comparison

[![NPM](https://nodei.co/npm/pix-diff.png)](https://nodei.co/npm/pix-diff/)

##Installation

Install this module locally with the following command:
```shell
npm install pix-diff
```

Save to dependencies or dev-dependencies:
```shell
npm install --save pix-diff
npm install --save-dev pix-diff
```

##Usage

The package can be used directly in individual tests or via ```onPrepare``` in the Protractor configuration file.

**Example:**
```javascript
exports.config = {
   // your config here ...

    onPrepare: function() {
        var PixDiff = require('pix-diff');
        browser.pixdiff = new PixDiff(
            {
                basePath: 'path/to/screenshots/',
                width: 1280,
                height: 1024
            }
        );
    },
}
```

PixDiff provides two comparison methods ```checkScreen``` and ```checkRegion``` along with two jasmine matchers ```toMatch``` and ```toNotMatch```. Two helper methods ```saveScreen``` and ```saveRegion``` are provided for saving images.

**Example:**
```javascript
describe("Example page", function() {

    beforeEach(function() {
        browser.get('http://www.example.com/');
    });

    it("should match the page", function () {
        expect(browser.pixdiff.checkScreen('example-page')).toMatch();
    });

    it("should not match the page", function () {
        element(By.buttonText('yes')).click();
        expect(browser.pixdiff.checkScreen('example-page')).toNotMatch();
    });

    it("should match the title", function () {
        expect(browser.pixdiff.checkRegion(element(By.id('title')), 'example-page-title')).toMatch();
    });

    it("should match the title", function () {
        expect(browser.pixdiff.checkRegion(element(By.id('title')), 'example-page-title', {
            blockOut: {x: 10, y: 132, width: 100, height: 50}})).toMatch();
    });
});
```

####PixDiff Parameters:

* ```basePath``` Defines the path to the reference images that are to be compared.
* ```width``` Browser width (default: 1280)
* ```height``` Browser height (default: 1024)

####Function options:

* ```blockOut``` Object or list of objects with coordinates that should be blocked before comparing. (default: none)
* ```debug``` When set, then block-out regions will be shown on the output image. (default: false)

####Cropping
Images can be cropped before they are compared by using the ```checkRegion``` function. The function will calculate the correct dimensions based upon the webdriver element selector (see example above).

####Block-Out
Sometimes, it is necessary to block-out some specific areas in an image that should be ignored for comparisons. For example, this can be IDs or even time-labels that change with the time. Adding block-outs to images may decrease false positives and therefore stabilizes these comparisons (see example above).

## Conventions
There are directory and naming conventions that must be met.

**Directory structure**
```text
path
└── to
    └── screenshots
        ├── diff
        │   └── example-page-chrome-1280x1024.png
        ├── example-page-chrome-800x600.png
        ├── example-page-chrome-1280x1024.png
        ├── example-page-title-chrome-800x600.png
        └── example-page-title-chrome-1280x1024.png
```
The ```basePath``` directory must contain all the *approved* images. You may create subdirectories for better organisation, but the relative path should then be given in the test spec method. Failed comparisons generate a diff image under the **diff** folder.

**Image naming**

Images should obey the following format:

```text
{descriptive_name}-{browserName}-{browserWidth}x{browserHeight}.png
```
Images specified via name in the spec method will be selected according to the browsers current resolution. That is to say that multiple images can share the same name differentated by resolution.

##Documentation

Todo

##Tests

Run the tests with the following command:
```shell
npm run test
```

###Dependencies
* [blink-diff](https://github.com/yahoo/blink-diff)
* [png-image](https://github.com/koola/png-image)

###Dev-Dependencies
* [protractor](https://github.com/angular/protractor)

##License

The MIT License

Copyright 2014 Koola.