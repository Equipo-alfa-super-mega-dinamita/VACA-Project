import React from 'react';
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-assembly_x86";
import "ace-builds/src-noconflict/theme-github";

const placeHolder = "            org     1000h       ; Start at 0000:1000h\n" +
    "\n" +
    "_memcpy     proc\n" +
    "            push    bp          ; Set up the call frame\n" +
    "            mov     bp,sp\n" +
    "            push    es          ; Save ES\n" +
    "            mov     cx,[bp+6]   ; Set CX = len\n" +
    "            jcxz    done        ; If len = 0, return\n" +
    "            mov     si,[bp+4]   ; Set SI = src\n" +
    "            mov     di,[bp+2]   ; Set DI = dst\n" +
    "            push    ds          ; Set ES = DS\n" +
    "            pop     es\n" +
    "\n" +
    "loop        mov     al,[si]     ; Load AL from [src]\n" +
    "            mov     [di],al     ; Store AL to [dst]\n" +
    "            inc     si          ; Increment src\n" +
    "            inc     di          ; Increment dst\n" +
    "            dec     cx          ; Decrement len\n" +
    "            jnz     loop        ; Repeat the loop\n" +
    "\n" +
    "done        pop     es          ; Restore ES\n" +
    "            pop     bp          ; Restore previous call frame\n" +
    "            sub     ax,ax       ; Set AX = 0\n" +
    "            ret                 ; Return\n" +
    "            end proc";

function CodeEditor(props) {

    return (
            <AceEditor {...props} mode="assembly_x86" theme="github" value={placeHolder}/>
    )
}

export default CodeEditor;