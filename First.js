import {thisfunction as func} from "./secondmjs.mjs";
import {thisfunction} from "./secondmjs.mjs";
// import {} from "./secondmjs.mjs";
//it is necessary to add {} if you dont have any default function in any mjs file 
import * as  a from"./secondmjs.mjs";


//running imported file using mjs module
thisfunction();
func();
a.thisfunction1();


