// Generated from /home/julian/VACA-Project/grammar/asm8086.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by asm8086Parser.

function asm8086Visitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

asm8086Visitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
asm8086Visitor.prototype.constructor = asm8086Visitor;

// Visit a parse tree produced by asm8086Parser#prog.
asm8086Visitor.prototype.visitProg = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by asm8086Parser#line.
asm8086Visitor.prototype.visitLine = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by asm8086Parser#instruction.
asm8086Visitor.prototype.visitInstruction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by asm8086Parser#lbl.
asm8086Visitor.prototype.visitLbl = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by asm8086Parser#assemblerdirective.
asm8086Visitor.prototype.visitAssemblerdirective = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by asm8086Parser#rw.
asm8086Visitor.prototype.visitRw = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by asm8086Parser#rb.
asm8086Visitor.prototype.visitRb = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by asm8086Parser#rs.
asm8086Visitor.prototype.visitRs = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by asm8086Parser#cseg.
asm8086Visitor.prototype.visitCseg = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by asm8086Parser#dseg.
asm8086Visitor.prototype.visitDseg = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by asm8086Parser#dw.
asm8086Visitor.prototype.visitDw = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by asm8086Parser#db.
asm8086Visitor.prototype.visitDb = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by asm8086Parser#dd.
asm8086Visitor.prototype.visitDd = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by asm8086Parser#equ.
asm8086Visitor.prototype.visitEqu = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by asm8086Parser#if_.
asm8086Visitor.prototype.visitIf_ = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by asm8086Parser#assemblerexpression.
asm8086Visitor.prototype.visitAssemblerexpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by asm8086Parser#assemblerlogical.
asm8086Visitor.prototype.visitAssemblerlogical = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by asm8086Parser#assemblerterm.
asm8086Visitor.prototype.visitAssemblerterm = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by asm8086Parser#endif.
asm8086Visitor.prototype.visitEndif = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by asm8086Parser#end.
asm8086Visitor.prototype.visitEnd = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by asm8086Parser#org.
asm8086Visitor.prototype.visitOrg = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by asm8086Parser#title.
asm8086Visitor.prototype.visitTitle = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by asm8086Parser#include.
asm8086Visitor.prototype.visitInclude = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by asm8086Parser#expressionlist.
asm8086Visitor.prototype.visitExpressionlist = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by asm8086Parser#label.
asm8086Visitor.prototype.visitLabel = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by asm8086Parser#expression.
asm8086Visitor.prototype.visitExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by asm8086Parser#multiplyingExpression.
asm8086Visitor.prototype.visitMultiplyingExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by asm8086Parser#argument.
asm8086Visitor.prototype.visitArgument = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by asm8086Parser#ptr.
asm8086Visitor.prototype.visitPtr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by asm8086Parser#dollar.
asm8086Visitor.prototype.visitDollar = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by asm8086Parser#register_.
asm8086Visitor.prototype.visitRegister_ = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by asm8086Parser#string.
asm8086Visitor.prototype.visitString = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by asm8086Parser#name.
asm8086Visitor.prototype.visitName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by asm8086Parser#number.
asm8086Visitor.prototype.visitNumber = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by asm8086Parser#opcode.
asm8086Visitor.prototype.visitOpcode = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by asm8086Parser#rep.
asm8086Visitor.prototype.visitRep = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by asm8086Parser#comment.
asm8086Visitor.prototype.visitComment = function(ctx) {
  return this.visitChildren(ctx);
};



exports.asm8086Visitor = asm8086Visitor;