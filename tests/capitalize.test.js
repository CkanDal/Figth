import capitalize from "../src/capitalize.js"
import { strict as assert } from 'assert';

assert.strictEqual(capitalize(""), "");
assert.strictEqual(capitalize("hexlet"),"2exlet");
  
  