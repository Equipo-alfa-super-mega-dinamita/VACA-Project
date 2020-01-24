// Generated from C:/Users/Nicolai/Documents/GitHub/VACA-Project/vaca/grammar\asm8086.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by asm8086Parser.
function asm8086Listener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

asm8086Listener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
asm8086Listener.prototype.constructor = asm8086Listener;

// Enter a parse tree produced by asm8086Parser#prog.
asm8086Listener.prototype.enterProg = function(ctx) {
};

// Exit a parse tree produced by asm8086Parser#prog.
asm8086Listener.prototype.exitProg = function(ctx) {
};


// Enter a parse tree produced by asm8086Parser#line.
asm8086Listener.prototype.enterLine = function(ctx) {
};

// Exit a parse tree produced by asm8086Parser#line.
asm8086Listener.prototype.exitLine = function(ctx) {
};


// Enter a parse tree produced by asm8086Parser#instruction.
asm8086Listener.prototype.enterInstruction = function(ctx) {
};

// Exit a parse tree produced by asm8086Parser#instruction.
asm8086Listener.prototype.exitInstruction = function(ctx) {
};


// Enter a parse tree produced by asm8086Parser#lbl.
asm8086Listener.prototype.enterLbl = function(ctx) {
};

// Exit a parse tree produced by asm8086Parser#lbl.
asm8086Listener.prototype.exitLbl = function(ctx) {
};


// Enter a parse tree produced by asm8086Parser#assemblerdirective.
asm8086Listener.prototype.enterAssemblerdirective = function(ctx) {
};

// Exit a parse tree produced by asm8086Parser#assemblerdirective.
asm8086Listener.prototype.exitAssemblerdirective = function(ctx) {
};


// Enter a parse tree produced by asm8086Parser#rw.
asm8086Listener.prototype.enterRw = function(ctx) {
};

// Exit a parse tree produced by asm8086Parser#rw.
asm8086Listener.prototype.exitRw = function(ctx) {
};


// Enter a parse tree produced by asm8086Parser#rb.
asm8086Listener.prototype.enterRb = function(ctx) {
};

// Exit a parse tree produced by asm8086Parser#rb.
asm8086Listener.prototype.exitRb = function(ctx) {
};


// Enter a parse tree produced by asm8086Parser#rs.
asm8086Listener.prototype.enterRs = function(ctx) {
};

// Exit a parse tree produced by asm8086Parser#rs.
asm8086Listener.prototype.exitRs = function(ctx) {
};


// Enter a parse tree produced by asm8086Parser#cseg.
asm8086Listener.prototype.enterCseg = function(ctx) {
};

// Exit a parse tree produced by asm8086Parser#cseg.
asm8086Listener.prototype.exitCseg = function(ctx) {
};


// Enter a parse tree produced by asm8086Parser#dseg.
asm8086Listener.prototype.enterDseg = function(ctx) {
};

// Exit a parse tree produced by asm8086Parser#dseg.
asm8086Listener.prototype.exitDseg = function(ctx) {
};


// Enter a parse tree produced by asm8086Parser#dw.
asm8086Listener.prototype.enterDw = function(ctx) {
};

// Exit a parse tree produced by asm8086Parser#dw.
asm8086Listener.prototype.exitDw = function(ctx) {
};


// Enter a parse tree produced by asm8086Parser#db.
asm8086Listener.prototype.enterDb = function(ctx) {
};

// Exit a parse tree produced by asm8086Parser#db.
asm8086Listener.prototype.exitDb = function(ctx) {
};


// Enter a parse tree produced by asm8086Parser#dd.
asm8086Listener.prototype.enterDd = function(ctx) {
};

// Exit a parse tree produced by asm8086Parser#dd.
asm8086Listener.prototype.exitDd = function(ctx) {
};


// Enter a parse tree produced by asm8086Parser#equ.
asm8086Listener.prototype.enterEqu = function(ctx) {
};

// Exit a parse tree produced by asm8086Parser#equ.
asm8086Listener.prototype.exitEqu = function(ctx) {
};


// Enter a parse tree produced by asm8086Parser#if_.
asm8086Listener.prototype.enterIf_ = function(ctx) {
};

// Exit a parse tree produced by asm8086Parser#if_.
asm8086Listener.prototype.exitIf_ = function(ctx) {
};


// Enter a parse tree produced by asm8086Parser#assemblerexpression.
asm8086Listener.prototype.enterAssemblerexpression = function(ctx) {
};

// Exit a parse tree produced by asm8086Parser#assemblerexpression.
asm8086Listener.prototype.exitAssemblerexpression = function(ctx) {
};


// Enter a parse tree produced by asm8086Parser#assemblerlogical.
asm8086Listener.prototype.enterAssemblerlogical = function(ctx) {
};

// Exit a parse tree produced by asm8086Parser#assemblerlogical.
asm8086Listener.prototype.exitAssemblerlogical = function(ctx) {
};


// Enter a parse tree produced by asm8086Parser#assemblerterm.
asm8086Listener.prototype.enterAssemblerterm = function(ctx) {
};

// Exit a parse tree produced by asm8086Parser#assemblerterm.
asm8086Listener.prototype.exitAssemblerterm = function(ctx) {
};


// Enter a parse tree produced by asm8086Parser#endif.
asm8086Listener.prototype.enterEndif = function(ctx) {
};

// Exit a parse tree produced by asm8086Parser#endif.
asm8086Listener.prototype.exitEndif = function(ctx) {
};


// Enter a parse tree produced by asm8086Parser#end.
asm8086Listener.prototype.enterEnd = function(ctx) {
};

// Exit a parse tree produced by asm8086Parser#end.
asm8086Listener.prototype.exitEnd = function(ctx) {
};


// Enter a parse tree produced by asm8086Parser#org.
asm8086Listener.prototype.enterOrg = function(ctx) {
};

// Exit a parse tree produced by asm8086Parser#org.
asm8086Listener.prototype.exitOrg = function(ctx) {
};


// Enter a parse tree produced by asm8086Parser#title.
asm8086Listener.prototype.enterTitle = function(ctx) {
};

// Exit a parse tree produced by asm8086Parser#title.
asm8086Listener.prototype.exitTitle = function(ctx) {
};


// Enter a parse tree produced by asm8086Parser#include.
asm8086Listener.prototype.enterInclude = function(ctx) {
};

// Exit a parse tree produced by asm8086Parser#include.
asm8086Listener.prototype.exitInclude = function(ctx) {
};


// Enter a parse tree produced by asm8086Parser#expressionlist.
asm8086Listener.prototype.enterExpressionlist = function(ctx) {
};

// Exit a parse tree produced by asm8086Parser#expressionlist.
asm8086Listener.prototype.exitExpressionlist = function(ctx) {
};


// Enter a parse tree produced by asm8086Parser#label.
asm8086Listener.prototype.enterLabel = function(ctx) {
};

// Exit a parse tree produced by asm8086Parser#label.
asm8086Listener.prototype.exitLabel = function(ctx) {
};


// Enter a parse tree produced by asm8086Parser#expression.
asm8086Listener.prototype.enterExpression = function(ctx) {
};

// Exit a parse tree produced by asm8086Parser#expression.
asm8086Listener.prototype.exitExpression = function(ctx) {
};


// Enter a parse tree produced by asm8086Parser#multiplyingExpression.
asm8086Listener.prototype.enterMultiplyingExpression = function(ctx) {
};

// Exit a parse tree produced by asm8086Parser#multiplyingExpression.
asm8086Listener.prototype.exitMultiplyingExpression = function(ctx) {
};


// Enter a parse tree produced by asm8086Parser#argument.
asm8086Listener.prototype.enterArgument = function(ctx) {
};

// Exit a parse tree produced by asm8086Parser#argument.
asm8086Listener.prototype.exitArgument = function(ctx) {
};


// Enter a parse tree produced by asm8086Parser#ptr.
asm8086Listener.prototype.enterPtr = function(ctx) {
};

// Exit a parse tree produced by asm8086Parser#ptr.
asm8086Listener.prototype.exitPtr = function(ctx) {
};


// Enter a parse tree produced by asm8086Parser#dollar.
asm8086Listener.prototype.enterDollar = function(ctx) {
};

// Exit a parse tree produced by asm8086Parser#dollar.
asm8086Listener.prototype.exitDollar = function(ctx) {
};


// Enter a parse tree produced by asm8086Parser#register_.
asm8086Listener.prototype.enterRegister_ = function(ctx) {
};

// Exit a parse tree produced by asm8086Parser#register_.
asm8086Listener.prototype.exitRegister_ = function(ctx) {
};


// Enter a parse tree produced by asm8086Parser#string.
asm8086Listener.prototype.enterString = function(ctx) {
};

// Exit a parse tree produced by asm8086Parser#string.
asm8086Listener.prototype.exitString = function(ctx) {
};


// Enter a parse tree produced by asm8086Parser#name.
asm8086Listener.prototype.enterName = function(ctx) {
};

// Exit a parse tree produced by asm8086Parser#name.
asm8086Listener.prototype.exitName = function(ctx) {
};


// Enter a parse tree produced by asm8086Parser#number.
asm8086Listener.prototype.enterNumber = function(ctx) {
};

// Exit a parse tree produced by asm8086Parser#number.
asm8086Listener.prototype.exitNumber = function(ctx) {
};


// Enter a parse tree produced by asm8086Parser#opcode.
asm8086Listener.prototype.enterOpcode = function(ctx) {
};

// Exit a parse tree produced by asm8086Parser#opcode.
asm8086Listener.prototype.exitOpcode = function(ctx) {
};


// Enter a parse tree produced by asm8086Parser#rep.
asm8086Listener.prototype.enterRep = function(ctx) {
};

// Exit a parse tree produced by asm8086Parser#rep.
asm8086Listener.prototype.exitRep = function(ctx) {
};


// Enter a parse tree produced by asm8086Parser#comment.
asm8086Listener.prototype.enterComment = function(ctx) {
};

// Exit a parse tree produced by asm8086Parser#comment.
asm8086Listener.prototype.exitComment = function(ctx) {
};



exports.asm8086Listener = asm8086Listener;