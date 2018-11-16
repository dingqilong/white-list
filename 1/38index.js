OCTYPE HTML>
<!--
/*
 * JavaScript MD5 Demo
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */
-->
<html lang="en">
<head>
<!--[if IE]>
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<![endif]-->
<meta charset="utf-8">
<title>JavaScript MD5 Demo</title>
<meta name="description" content="JavaScript MD5 implementation. Compatible with server-side environments like Node.js, module loaders like RequireJS, Browserify or webpack and all web browsers.">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="css/demo.css">
</head>
<body>
<h1>JavaScript MD5 Demo</h1>
<p>JavaScript <a href="https://en.wikipedia.org/wiki/MD5">MD5</a> implementation.<br>
Compatible with server-side environments like <a href="http://nodejs.org/">Node.js</a>, module loaders like <a href="http://requirejs.org/">RequireJS</a>, <a href="http://browserify.org/">Browserify</a> or <a href="https://webpack.github.io/">webpack</a> and all web browsers.</p>
<ul class="navigation">
    <li><a href="https://github.com/blueimp/JavaScript-MD5/tags">Download</a></li>
    <li><a href="https://github.com/blueimp/JavaScript-MD5">Source Code</a></li>
    <li><a href="https://github.com/blueimp/JavaScript-MD5/blob/master/README.md">Documentation</a></li>
    <li><a href="test/">Test</a></li>
    <li><a href="https://blueimp.net">&copy; Sebastian Tschan</a></li>
</ul>
<form>
    <h2>Input</h2>
    <textarea rows="6" id="input"></textarea>
    <br>
    <button type="submit" id="calculate">Calculate</button>
    <button type="reset" id="reset">Reset</button>
    <h2>Result</h2>
    <input id="result">
    <br>
</form>
<script src="js/md5.js">