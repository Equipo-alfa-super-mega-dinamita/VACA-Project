/* eslint-disable */

// Generated from /home/julian/VACA-Project/grammar/asm8086.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var asm8086Listener = require('./asm8086Listener').asm8086Listener;
var asm8086Visitor = require('./asm8086Visitor').asm8086Visitor;

var grammarFileName = "asm8086.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u00032\u0129\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0003\u0002\u0003\u0002\u0003\u0002\u0007",
    "\u0002R\n\u0002\f\u0002\u000e\u0002U\u000b\u0002\u0003\u0002\u0003\u0002",
    "\u0007\u0002Y\n\u0002\f\u0002\u000e\u0002\\\u000b\u0002\u0003\u0003",
    "\u0005\u0003_\n\u0003\u0003\u0003\u0003\u0003\u0005\u0003c\n\u0003\u0003",
    "\u0003\u0005\u0003f\n\u0003\u0003\u0004\u0005\u0004i\n\u0004\u0003\u0004",
    "\u0003\u0004\u0005\u0004m\n\u0004\u0003\u0005\u0003\u0005\u0005\u0005",
    "q\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006",
    "\u0083\n\u0006\u0003\u0007\u0005\u0007\u0086\n\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\b\u0005\b\u008c\n\b\u0003\b\u0003\b\u0003\b",
    "\u0003\t\u0005\t\u0092\n\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0005",
    "\n\u0099\n\n\u0003\u000b\u0003\u000b\u0005\u000b\u009d\n\u000b\u0003",
    "\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0007",
    "\u0011\u00b3\n\u0011\f\u0011\u000e\u0011\u00b6\u000b\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0005\u0011\u00bc\n\u0011\u0003",
    "\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0005",
    "\u0013\u00c4\n\u0013\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0017",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u0019",
    "\u0007\u0019\u00d6\n\u0019\f\u0019\u000e\u0019\u00d9\u000b\u0019\u0003",
    "\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0007\u001b\u00e0",
    "\n\u001b\f\u001b\u000e\u001b\u00e3\u000b\u001b\u0003\u001c\u0003\u001c",
    "\u0003\u001c\u0007\u001c\u00e8\n\u001c\f\u001c\u000e\u001c\u00eb\u000b",
    "\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003",
    "\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003",
    "\u001d\u0005\u001d\u00f9\n\u001d\u0003\u001d\u0003\u001d\u0003\u001d",
    "\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d",
    "\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d",
    "\u0003\u001d\u0003\u001d\u0003\u001d\u0005\u001d\u010d\n\u001d\u0003",
    "\u001e\u0005\u001e\u0110\n\u001e\u0003\u001e\u0003\u001e\u0003\u001f",
    "\u0003\u001f\u0003 \u0003 \u0003!\u0003!\u0003\"\u0003\"\u0003#\u0003",
    "#\u0003$\u0005$\u011f\n$\u0003$\u0003$\u0003%\u0003%\u0003&\u0003&\u0003",
    "\'\u0003\'\u0003\'\u0002\u0002(\u0002\u0004\u0006\b\n\f\u000e\u0010",
    "\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJL\u0002",
    "\u0005\u0003\u0002\b\t\u0003\u0002\u000b\u000e\u0003\u0002\u0012\u0014",
    "\u0002\u0136\u0002Z\u0003\u0002\u0002\u0002\u0004^\u0003\u0002\u0002",
    "\u0002\u0006h\u0003\u0002\u0002\u0002\bn\u0003\u0002\u0002\u0002\n\u0082",
    "\u0003\u0002\u0002\u0002\f\u0085\u0003\u0002\u0002\u0002\u000e\u008b",
    "\u0003\u0002\u0002\u0002\u0010\u0091\u0003\u0002\u0002\u0002\u0012\u0096",
    "\u0003\u0002\u0002\u0002\u0014\u009a\u0003\u0002\u0002\u0002\u0016\u009e",
    "\u0003\u0002\u0002\u0002\u0018\u00a1\u0003\u0002\u0002\u0002\u001a\u00a4",
    "\u0003\u0002\u0002\u0002\u001c\u00a7\u0003\u0002\u0002\u0002\u001e\u00ab",
    "\u0003\u0002\u0002\u0002 \u00bb\u0003\u0002\u0002\u0002\"\u00bd\u0003",
    "\u0002\u0002\u0002$\u00c3\u0003\u0002\u0002\u0002&\u00c5\u0003\u0002",
    "\u0002\u0002(\u00c7\u0003\u0002\u0002\u0002*\u00c9\u0003\u0002\u0002",
    "\u0002,\u00cc\u0003\u0002\u0002\u0002.\u00cf\u0003\u0002\u0002\u0002",
    "0\u00d2\u0003\u0002\u0002\u00022\u00da\u0003\u0002\u0002\u00024\u00dc",
    "\u0003\u0002\u0002\u00026\u00e4\u0003\u0002\u0002\u00028\u010c\u0003",
    "\u0002\u0002\u0002:\u010f\u0003\u0002\u0002\u0002<\u0113\u0003\u0002",
    "\u0002\u0002>\u0115\u0003\u0002\u0002\u0002@\u0117\u0003\u0002\u0002",
    "\u0002B\u0119\u0003\u0002\u0002\u0002D\u011b\u0003\u0002\u0002\u0002",
    "F\u011e\u0003\u0002\u0002\u0002H\u0122\u0003\u0002\u0002\u0002J\u0124",
    "\u0003\u0002\u0002\u0002L\u0126\u0003\u0002\u0002\u0002NS\u0005\u0004",
    "\u0003\u0002OP\u0007\u0003\u0002\u0002PR\u0005\u0004\u0003\u0002QO\u0003",
    "\u0002\u0002\u0002RU\u0003\u0002\u0002\u0002SQ\u0003\u0002\u0002\u0002",
    "ST\u0003\u0002\u0002\u0002TV\u0003\u0002\u0002\u0002US\u0003\u0002\u0002",
    "\u0002VW\u00071\u0002\u0002WY\u0003\u0002\u0002\u0002XN\u0003\u0002",
    "\u0002\u0002Y\\\u0003\u0002\u0002\u0002ZX\u0003\u0002\u0002\u0002Z[",
    "\u0003\u0002\u0002\u0002[\u0003\u0003\u0002\u0002\u0002\\Z\u0003\u0002",
    "\u0002\u0002]_\u0005\b\u0005\u0002^]\u0003\u0002\u0002\u0002^_\u0003",
    "\u0002\u0002\u0002_b\u0003\u0002\u0002\u0002`c\u0005\n\u0006\u0002a",
    "c\u0005\u0006\u0004\u0002b`\u0003\u0002\u0002\u0002ba\u0003\u0002\u0002",
    "\u0002bc\u0003\u0002\u0002\u0002ce\u0003\u0002\u0002\u0002df\u0005L",
    "\'\u0002ed\u0003\u0002\u0002\u0002ef\u0003\u0002\u0002\u0002f\u0005",
    "\u0003\u0002\u0002\u0002gi\u0005J&\u0002hg\u0003\u0002\u0002\u0002h",
    "i\u0003\u0002\u0002\u0002ij\u0003\u0002\u0002\u0002jl\u0005H%\u0002",
    "km\u00050\u0019\u0002lk\u0003\u0002\u0002\u0002lm\u0003\u0002\u0002",
    "\u0002m\u0007\u0003\u0002\u0002\u0002np\u00052\u001a\u0002oq\u0007\u0004",
    "\u0002\u0002po\u0003\u0002\u0002\u0002pq\u0003\u0002\u0002\u0002q\t",
    "\u0003\u0002\u0002\u0002r\u0083\u0005*\u0016\u0002s\u0083\u0005(\u0015",
    "\u0002t\u0083\u0005\u001e\u0010\u0002u\u0083\u0005&\u0014\u0002v\u0083",
    "\u0005\u001c\u000f\u0002w\u0083\u0005\u0018\r\u0002x\u0083\u0005\u0016",
    "\f\u0002y\u0083\u0005\u0012\n\u0002z\u0083\u0005\u001a\u000e\u0002{",
    "\u0083\u0005\u0014\u000b\u0002|\u0083\u0005,\u0017\u0002}\u0083\u0005",
    ".\u0018\u0002~\u0083\u0005\f\u0007\u0002\u007f\u0083\u0005\u000e\b\u0002",
    "\u0080\u0083\u0005\u0010\t\u0002\u0081\u0083\u0007\u0005\u0002\u0002",
    "\u0082r\u0003\u0002\u0002\u0002\u0082s\u0003\u0002\u0002\u0002\u0082",
    "t\u0003\u0002\u0002\u0002\u0082u\u0003\u0002\u0002\u0002\u0082v\u0003",
    "\u0002\u0002\u0002\u0082w\u0003\u0002\u0002\u0002\u0082x\u0003\u0002",
    "\u0002\u0002\u0082y\u0003\u0002\u0002\u0002\u0082z\u0003\u0002\u0002",
    "\u0002\u0082{\u0003\u0002\u0002\u0002\u0082|\u0003\u0002\u0002\u0002",
    "\u0082}\u0003\u0002\u0002\u0002\u0082~\u0003\u0002\u0002\u0002\u0082",
    "\u007f\u0003\u0002\u0002\u0002\u0082\u0080\u0003\u0002\u0002\u0002\u0082",
    "\u0081\u0003\u0002\u0002\u0002\u0083\u000b\u0003\u0002\u0002\u0002\u0084",
    "\u0086\u0005D#\u0002\u0085\u0084\u0003\u0002\u0002\u0002\u0085\u0086",
    "\u0003\u0002\u0002\u0002\u0086\u0087\u0003\u0002\u0002\u0002\u0087\u0088",
    "\u0007$\u0002\u0002\u0088\u0089\u00054\u001b\u0002\u0089\r\u0003\u0002",
    "\u0002\u0002\u008a\u008c\u0005D#\u0002\u008b\u008a\u0003\u0002\u0002",
    "\u0002\u008b\u008c\u0003\u0002\u0002\u0002\u008c\u008d\u0003\u0002\u0002",
    "\u0002\u008d\u008e\u0007%\u0002\u0002\u008e\u008f\u00054\u001b\u0002",
    "\u008f\u000f\u0003\u0002\u0002\u0002\u0090\u0092\u0005D#\u0002\u0091",
    "\u0090\u0003\u0002\u0002\u0002\u0091\u0092\u0003\u0002\u0002\u0002\u0092",
    "\u0093\u0003\u0002\u0002\u0002\u0093\u0094\u0007&\u0002\u0002\u0094",
    "\u0095\u00054\u001b\u0002\u0095\u0011\u0003\u0002\u0002\u0002\u0096",
    "\u0098\u0007\u0016\u0002\u0002\u0097\u0099\u00054\u001b\u0002\u0098",
    "\u0097\u0003\u0002\u0002\u0002\u0098\u0099\u0003\u0002\u0002\u0002\u0099",
    "\u0013\u0003\u0002\u0002\u0002\u009a\u009c\u0007\u0015\u0002\u0002\u009b",
    "\u009d\u00054\u001b\u0002\u009c\u009b\u0003\u0002\u0002\u0002\u009c",
    "\u009d\u0003\u0002\u0002\u0002\u009d\u0015\u0003\u0002\u0002\u0002\u009e",
    "\u009f\u0007\u001e\u0002\u0002\u009f\u00a0\u00050\u0019\u0002\u00a0",
    "\u0017\u0003\u0002\u0002\u0002\u00a1\u00a2\u0007\u001f\u0002\u0002\u00a2",
    "\u00a3\u00050\u0019\u0002\u00a3\u0019\u0003\u0002\u0002\u0002\u00a4",
    "\u00a5\u0007 \u0002\u0002\u00a5\u00a6\u00050\u0019\u0002\u00a6\u001b",
    "\u0003\u0002\u0002\u0002\u00a7\u00a8\u0005D#\u0002\u00a8\u00a9\u0007",
    "\u001d\u0002\u0002\u00a9\u00aa\u00054\u001b\u0002\u00aa\u001d\u0003",
    "\u0002\u0002\u0002\u00ab\u00ac\u0007\u001c\u0002\u0002\u00ac\u00ad\u0005",
    " \u0011\u0002\u00ad\u001f\u0003\u0002\u0002\u0002\u00ae\u00b4\u0005",
    "$\u0013\u0002\u00af\u00b0\u0005\"\u0012\u0002\u00b0\u00b1\u0005$\u0013",
    "\u0002\u00b1\u00b3\u0003\u0002\u0002\u0002\u00b2\u00af\u0003\u0002\u0002",
    "\u0002\u00b3\u00b6\u0003\u0002\u0002\u0002\u00b4\u00b2\u0003\u0002\u0002",
    "\u0002\u00b4\u00b5\u0003\u0002\u0002\u0002\u00b5\u00bc\u0003\u0002\u0002",
    "\u0002\u00b6\u00b4\u0003\u0002\u0002\u0002\u00b7\u00b8\u0007\u0006\u0002",
    "\u0002\u00b8\u00b9\u0005 \u0011\u0002\u00b9\u00ba\u0007\u0007\u0002",
    "\u0002\u00ba\u00bc\u0003\u0002\u0002\u0002\u00bb\u00ae\u0003\u0002\u0002",
    "\u0002\u00bb\u00b7\u0003\u0002\u0002\u0002\u00bc!\u0003\u0002\u0002",
    "\u0002\u00bd\u00be\t\u0002\u0002\u0002\u00be#\u0003\u0002\u0002\u0002",
    "\u00bf\u00c4\u0005D#\u0002\u00c0\u00c4\u0005F$\u0002\u00c1\u00c2\u0007",
    "\"\u0002\u0002\u00c2\u00c4\u0005$\u0013\u0002\u00c3\u00bf\u0003\u0002",
    "\u0002\u0002\u00c3\u00c0\u0003\u0002\u0002\u0002\u00c3\u00c1\u0003\u0002",
    "\u0002\u0002\u00c4%\u0003\u0002\u0002\u0002\u00c5\u00c6\u0007\u001b",
    "\u0002\u0002\u00c6\'\u0003\u0002\u0002\u0002\u00c7\u00c8\u0007\u0019",
    "\u0002\u0002\u00c8)\u0003\u0002\u0002\u0002\u00c9\u00ca\u0007\u001a",
    "\u0002\u0002\u00ca\u00cb\u00054\u001b\u0002\u00cb+\u0003\u0002\u0002",
    "\u0002\u00cc\u00cd\u0007\u0018\u0002\u0002\u00cd\u00ce\u0005B\"\u0002",
    "\u00ce-\u0003\u0002\u0002\u0002\u00cf\u00d0\u0007\u0017\u0002\u0002",
    "\u00d0\u00d1\u0005D#\u0002\u00d1/\u0003\u0002\u0002\u0002\u00d2\u00d7",
    "\u00054\u001b\u0002\u00d3\u00d4\u0007\n\u0002\u0002\u00d4\u00d6\u0005",
    "4\u001b\u0002\u00d5\u00d3\u0003\u0002\u0002\u0002\u00d6\u00d9\u0003",
    "\u0002\u0002\u0002\u00d7\u00d5\u0003\u0002\u0002\u0002\u00d7\u00d8\u0003",
    "\u0002\u0002\u0002\u00d81\u0003\u0002\u0002\u0002\u00d9\u00d7\u0003",
    "\u0002\u0002\u0002\u00da\u00db\u0005D#\u0002\u00db3\u0003\u0002\u0002",
    "\u0002\u00dc\u00e1\u00056\u001c\u0002\u00dd\u00de\u0007-\u0002\u0002",
    "\u00de\u00e0\u00056\u001c\u0002\u00df\u00dd\u0003\u0002\u0002\u0002",
    "\u00e0\u00e3\u0003\u0002\u0002\u0002\u00e1\u00df\u0003\u0002\u0002\u0002",
    "\u00e1\u00e2\u0003\u0002\u0002\u0002\u00e25\u0003\u0002\u0002\u0002",
    "\u00e3\u00e1\u0003\u0002\u0002\u0002\u00e4\u00e9\u00058\u001d\u0002",
    "\u00e5\u00e6\t\u0003\u0002\u0002\u00e6\u00e8\u00058\u001d\u0002\u00e7",
    "\u00e5\u0003\u0002\u0002\u0002\u00e8\u00eb\u0003\u0002\u0002\u0002\u00e9",
    "\u00e7\u0003\u0002\u0002\u0002\u00e9\u00ea\u0003\u0002\u0002\u0002\u00ea",
    "7\u0003\u0002\u0002\u0002\u00eb\u00e9\u0003\u0002\u0002\u0002\u00ec",
    "\u010d\u0005F$\u0002\u00ed\u010d\u0005> \u0002\u00ee\u010d\u0005@!\u0002",
    "\u00ef\u010d\u0005D#\u0002\u00f0\u010d\u0005<\u001f\u0002\u00f1\u010d",
    "\u0005B\"\u0002\u00f2\u00f3\u0007\u0006\u0002\u0002\u00f3\u00f4\u0005",
    "4\u001b\u0002\u00f4\u00f5\u0007\u0007\u0002\u0002\u00f5\u010d\u0003",
    "\u0002\u0002\u0002\u00f6\u00f9\u0005F$\u0002\u00f7\u00f9\u0005D#\u0002",
    "\u00f8\u00f6\u0003\u0002\u0002\u0002\u00f8\u00f7\u0003\u0002\u0002\u0002",
    "\u00f8\u00f9\u0003\u0002\u0002\u0002\u00f9\u00fa\u0003\u0002\u0002\u0002",
    "\u00fa\u00fb\u0007\u000f\u0002\u0002\u00fb\u00fc\u00054\u001b\u0002",
    "\u00fc\u00fd\u0007\u0010\u0002\u0002\u00fd\u010d\u0003\u0002\u0002\u0002",
    "\u00fe\u00ff\u0005:\u001e\u0002\u00ff\u0100\u00054\u001b\u0002\u0100",
    "\u010d\u0003\u0002\u0002\u0002\u0101\u0102\u0007\"\u0002\u0002\u0102",
    "\u010d\u00054\u001b\u0002\u0103\u0104\u0007#\u0002\u0002\u0104\u010d",
    "\u00054\u001b\u0002\u0105\u0106\u0007\'\u0002\u0002\u0106\u010d\u0005",
    "4\u001b\u0002\u0107\u0108\u0005@!\u0002\u0108\u0109\u0007\u0004\u0002",
    "\u0002\u0109\u010a\u0003\u0002\u0002\u0002\u010a\u010b\u00054\u001b",
    "\u0002\u010b\u010d\u0003\u0002\u0002\u0002\u010c\u00ec\u0003\u0002\u0002",
    "\u0002\u010c\u00ed\u0003\u0002\u0002\u0002\u010c\u00ee\u0003\u0002\u0002",
    "\u0002\u010c\u00ef\u0003\u0002\u0002\u0002\u010c\u00f0\u0003\u0002\u0002",
    "\u0002\u010c\u00f1\u0003\u0002\u0002\u0002\u010c\u00f2\u0003\u0002\u0002",
    "\u0002\u010c\u00f8\u0003\u0002\u0002\u0002\u010c\u00fe\u0003\u0002\u0002",
    "\u0002\u010c\u0101\u0003\u0002\u0002\u0002\u010c\u0103\u0003\u0002\u0002",
    "\u0002\u010c\u0105\u0003\u0002\u0002\u0002\u010c\u0107\u0003\u0002\u0002",
    "\u0002\u010d9\u0003\u0002\u0002\u0002\u010e\u0110\t\u0004\u0002\u0002",
    "\u010f\u010e\u0003\u0002\u0002\u0002\u010f\u0110\u0003\u0002\u0002\u0002",
    "\u0110\u0111\u0003\u0002\u0002\u0002\u0111\u0112\u0007!\u0002\u0002",
    "\u0112;\u0003\u0002\u0002\u0002\u0113\u0114\u0007\u0011\u0002\u0002",
    "\u0114=\u0003\u0002\u0002\u0002\u0115\u0116\u0007,\u0002\u0002\u0116",
    "?\u0003\u0002\u0002\u0002\u0117\u0118\u0007)\u0002\u0002\u0118A\u0003",
    "\u0002\u0002\u0002\u0119\u011a\u00070\u0002\u0002\u011aC\u0003\u0002",
    "\u0002\u0002\u011b\u011c\u0007.\u0002\u0002\u011cE\u0003\u0002\u0002",
    "\u0002\u011d\u011f\u0007-\u0002\u0002\u011e\u011d\u0003\u0002\u0002",
    "\u0002\u011e\u011f\u0003\u0002\u0002\u0002\u011f\u0120\u0003\u0002\u0002",
    "\u0002\u0120\u0121\u0007/\u0002\u0002\u0121G\u0003\u0002\u0002\u0002",
    "\u0122\u0123\u0007*\u0002\u0002\u0123I\u0003\u0002\u0002\u0002\u0124",
    "\u0125\u0007+\u0002\u0002\u0125K\u0003\u0002\u0002\u0002\u0126\u0127",
    "\u0007(\u0002\u0002\u0127M\u0003\u0002\u0002\u0002\u001aSZ^behlp\u0082",
    "\u0085\u008b\u0091\u0098\u009c\u00b4\u00bb\u00c3\u00d7\u00e1\u00e9\u00f8",
    "\u010c\u010f\u011e"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'!'", "':'", "'.'", "'('", "')'", "'eq'", "'ne'", 
                     "','", "'*'", "'/'", "'mod'", "'and'", "'['", "']'", 
                     null, null, null, null, null, null, null, null, null, 
                     null, null, null, null, null, null, null, null, null, 
                     null, null, null, null, null, null, null, null, null, 
                     "'$'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, "POINTER", "BYTE", 
                      "WORD", "DWORD", "DSEG", "CSEG", "INCLUDE", "TITLE", 
                      "END", "ORG", "ENDIF", "IF", "EQU", "DW", "DB", "DD", 
                      "PTR", "NOT", "OFFSET", "RW", "RB", "RS", "LENGTH", 
                      "COMMENT", "REGISTER", "OPCODE", "REP", "DOLLAR", 
                      "SIGN", "NAME", "NUMBER", "STRING", "EOL", "WS" ];

var ruleNames =  [ "prog", "line", "instruction", "lbl", "assemblerdirective", 
                   "rw", "rb", "rs", "cseg", "dseg", "dw", "db", "dd", "equ", 
                   "if_", "assemblerexpression", "assemblerlogical", "assemblerterm", 
                   "endif", "end", "org", "title", "include", "expressionlist", 
                   "label", "expression", "multiplyingExpression", "argument", 
                   "ptr", "pointer_", "dollar", "register_", "string", "name", 
                   "number", "opcode", "rep", "comment" ];

function asm8086Parser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

asm8086Parser.prototype = Object.create(antlr4.Parser.prototype);
asm8086Parser.prototype.constructor = asm8086Parser;

Object.defineProperty(asm8086Parser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

asm8086Parser.EOF = antlr4.Token.EOF;
asm8086Parser.T__0 = 1;
asm8086Parser.T__1 = 2;
asm8086Parser.T__2 = 3;
asm8086Parser.T__3 = 4;
asm8086Parser.T__4 = 5;
asm8086Parser.T__5 = 6;
asm8086Parser.T__6 = 7;
asm8086Parser.T__7 = 8;
asm8086Parser.T__8 = 9;
asm8086Parser.T__9 = 10;
asm8086Parser.T__10 = 11;
asm8086Parser.T__11 = 12;
asm8086Parser.T__12 = 13;
asm8086Parser.T__13 = 14;
asm8086Parser.POINTER = 15;
asm8086Parser.BYTE = 16;
asm8086Parser.WORD = 17;
asm8086Parser.DWORD = 18;
asm8086Parser.DSEG = 19;
asm8086Parser.CSEG = 20;
asm8086Parser.INCLUDE = 21;
asm8086Parser.TITLE = 22;
asm8086Parser.END = 23;
asm8086Parser.ORG = 24;
asm8086Parser.ENDIF = 25;
asm8086Parser.IF = 26;
asm8086Parser.EQU = 27;
asm8086Parser.DW = 28;
asm8086Parser.DB = 29;
asm8086Parser.DD = 30;
asm8086Parser.PTR = 31;
asm8086Parser.NOT = 32;
asm8086Parser.OFFSET = 33;
asm8086Parser.RW = 34;
asm8086Parser.RB = 35;
asm8086Parser.RS = 36;
asm8086Parser.LENGTH = 37;
asm8086Parser.COMMENT = 38;
asm8086Parser.REGISTER = 39;
asm8086Parser.OPCODE = 40;
asm8086Parser.REP = 41;
asm8086Parser.DOLLAR = 42;
asm8086Parser.SIGN = 43;
asm8086Parser.NAME = 44;
asm8086Parser.NUMBER = 45;
asm8086Parser.STRING = 46;
asm8086Parser.EOL = 47;
asm8086Parser.WS = 48;

asm8086Parser.RULE_prog = 0;
asm8086Parser.RULE_line = 1;
asm8086Parser.RULE_instruction = 2;
asm8086Parser.RULE_lbl = 3;
asm8086Parser.RULE_assemblerdirective = 4;
asm8086Parser.RULE_rw = 5;
asm8086Parser.RULE_rb = 6;
asm8086Parser.RULE_rs = 7;
asm8086Parser.RULE_cseg = 8;
asm8086Parser.RULE_dseg = 9;
asm8086Parser.RULE_dw = 10;
asm8086Parser.RULE_db = 11;
asm8086Parser.RULE_dd = 12;
asm8086Parser.RULE_equ = 13;
asm8086Parser.RULE_if_ = 14;
asm8086Parser.RULE_assemblerexpression = 15;
asm8086Parser.RULE_assemblerlogical = 16;
asm8086Parser.RULE_assemblerterm = 17;
asm8086Parser.RULE_endif = 18;
asm8086Parser.RULE_end = 19;
asm8086Parser.RULE_org = 20;
asm8086Parser.RULE_title = 21;
asm8086Parser.RULE_include = 22;
asm8086Parser.RULE_expressionlist = 23;
asm8086Parser.RULE_label = 24;
asm8086Parser.RULE_expression = 25;
asm8086Parser.RULE_multiplyingExpression = 26;
asm8086Parser.RULE_argument = 27;
asm8086Parser.RULE_ptr = 28;
asm8086Parser.RULE_pointer_ = 29;
asm8086Parser.RULE_dollar = 30;
asm8086Parser.RULE_register_ = 31;
asm8086Parser.RULE_string = 32;
asm8086Parser.RULE_name = 33;
asm8086Parser.RULE_number = 34;
asm8086Parser.RULE_opcode = 35;
asm8086Parser.RULE_rep = 36;
asm8086Parser.RULE_comment = 37;


function ProgContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = asm8086Parser.RULE_prog;
    return this;
}

ProgContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgContext.prototype.constructor = ProgContext;

ProgContext.prototype.line = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(LineContext);
    } else {
        return this.getTypedRuleContext(LineContext,i);
    }
};

ProgContext.prototype.EOL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(asm8086Parser.EOL);
    } else {
        return this.getToken(asm8086Parser.EOL, i);
    }
};


ProgContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.enterProg(this);
	}
};

ProgContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.exitProg(this);
	}
};

ProgContext.prototype.accept = function(visitor) {
    if ( visitor instanceof asm8086Visitor ) {
        return visitor.visitProg(this);
    } else {
        return visitor.visitChildren(this);
    }
};




asm8086Parser.ProgContext = ProgContext;

asm8086Parser.prototype.prog = function() {

    var localctx = new ProgContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, asm8086Parser.RULE_prog);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 88;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << asm8086Parser.T__0) | (1 << asm8086Parser.T__2) | (1 << asm8086Parser.DSEG) | (1 << asm8086Parser.CSEG) | (1 << asm8086Parser.INCLUDE) | (1 << asm8086Parser.TITLE) | (1 << asm8086Parser.END) | (1 << asm8086Parser.ORG) | (1 << asm8086Parser.ENDIF) | (1 << asm8086Parser.IF) | (1 << asm8086Parser.DW) | (1 << asm8086Parser.DB) | (1 << asm8086Parser.DD))) !== 0) || ((((_la - 34)) & ~0x1f) == 0 && ((1 << (_la - 34)) & ((1 << (asm8086Parser.RW - 34)) | (1 << (asm8086Parser.RB - 34)) | (1 << (asm8086Parser.RS - 34)) | (1 << (asm8086Parser.COMMENT - 34)) | (1 << (asm8086Parser.OPCODE - 34)) | (1 << (asm8086Parser.REP - 34)) | (1 << (asm8086Parser.NAME - 34)) | (1 << (asm8086Parser.EOL - 34)))) !== 0)) {
            this.state = 76;
            this.line();
            this.state = 81;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===asm8086Parser.T__0) {
                this.state = 77;
                this.match(asm8086Parser.T__0);
                this.state = 78;
                this.line();
                this.state = 83;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 84;
            this.match(asm8086Parser.EOL);
            this.state = 90;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LineContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = asm8086Parser.RULE_line;
    return this;
}

LineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LineContext.prototype.constructor = LineContext;

LineContext.prototype.lbl = function() {
    return this.getTypedRuleContext(LblContext,0);
};

LineContext.prototype.assemblerdirective = function() {
    return this.getTypedRuleContext(AssemblerdirectiveContext,0);
};

LineContext.prototype.instruction = function() {
    return this.getTypedRuleContext(InstructionContext,0);
};

LineContext.prototype.comment = function() {
    return this.getTypedRuleContext(CommentContext,0);
};

LineContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.enterLine(this);
	}
};

LineContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.exitLine(this);
	}
};

LineContext.prototype.accept = function(visitor) {
    if ( visitor instanceof asm8086Visitor ) {
        return visitor.visitLine(this);
    } else {
        return visitor.visitChildren(this);
    }
};




asm8086Parser.LineContext = LineContext;

asm8086Parser.prototype.line = function() {

    var localctx = new LineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, asm8086Parser.RULE_line);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 92;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        if(la_===1) {
            this.state = 91;
            this.lbl();

        }
        this.state = 96;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
        case asm8086Parser.T__2:
        case asm8086Parser.DSEG:
        case asm8086Parser.CSEG:
        case asm8086Parser.INCLUDE:
        case asm8086Parser.TITLE:
        case asm8086Parser.END:
        case asm8086Parser.ORG:
        case asm8086Parser.ENDIF:
        case asm8086Parser.IF:
        case asm8086Parser.DW:
        case asm8086Parser.DB:
        case asm8086Parser.DD:
        case asm8086Parser.RW:
        case asm8086Parser.RB:
        case asm8086Parser.RS:
        case asm8086Parser.NAME:
        	this.state = 94;
        	this.assemblerdirective();
        	break;
        case asm8086Parser.OPCODE:
        case asm8086Parser.REP:
        	this.state = 95;
        	this.instruction();
        	break;
        case asm8086Parser.T__0:
        case asm8086Parser.COMMENT:
        case asm8086Parser.EOL:
        	break;
        default:
        	break;
        }
        this.state = 99;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===asm8086Parser.COMMENT) {
            this.state = 98;
            this.comment();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function InstructionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = asm8086Parser.RULE_instruction;
    return this;
}

InstructionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InstructionContext.prototype.constructor = InstructionContext;

InstructionContext.prototype.opcode = function() {
    return this.getTypedRuleContext(OpcodeContext,0);
};

InstructionContext.prototype.rep = function() {
    return this.getTypedRuleContext(RepContext,0);
};

InstructionContext.prototype.expressionlist = function() {
    return this.getTypedRuleContext(ExpressionlistContext,0);
};

InstructionContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.enterInstruction(this);
	}
};

InstructionContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.exitInstruction(this);
	}
};

InstructionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof asm8086Visitor ) {
        return visitor.visitInstruction(this);
    } else {
        return visitor.visitChildren(this);
    }
};




asm8086Parser.InstructionContext = InstructionContext;

asm8086Parser.prototype.instruction = function() {

    var localctx = new InstructionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, asm8086Parser.RULE_instruction);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 102;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===asm8086Parser.REP) {
            this.state = 101;
            this.rep();
        }

        this.state = 104;
        this.opcode();
        this.state = 106;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << asm8086Parser.T__3) | (1 << asm8086Parser.T__12) | (1 << asm8086Parser.POINTER) | (1 << asm8086Parser.BYTE) | (1 << asm8086Parser.WORD) | (1 << asm8086Parser.DWORD) | (1 << asm8086Parser.PTR))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (asm8086Parser.NOT - 32)) | (1 << (asm8086Parser.OFFSET - 32)) | (1 << (asm8086Parser.LENGTH - 32)) | (1 << (asm8086Parser.REGISTER - 32)) | (1 << (asm8086Parser.DOLLAR - 32)) | (1 << (asm8086Parser.SIGN - 32)) | (1 << (asm8086Parser.NAME - 32)) | (1 << (asm8086Parser.NUMBER - 32)) | (1 << (asm8086Parser.STRING - 32)))) !== 0)) {
            this.state = 105;
            this.expressionlist();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LblContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = asm8086Parser.RULE_lbl;
    return this;
}

LblContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LblContext.prototype.constructor = LblContext;

LblContext.prototype.label = function() {
    return this.getTypedRuleContext(LabelContext,0);
};

LblContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.enterLbl(this);
	}
};

LblContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.exitLbl(this);
	}
};

LblContext.prototype.accept = function(visitor) {
    if ( visitor instanceof asm8086Visitor ) {
        return visitor.visitLbl(this);
    } else {
        return visitor.visitChildren(this);
    }
};




asm8086Parser.LblContext = LblContext;

asm8086Parser.prototype.lbl = function() {

    var localctx = new LblContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, asm8086Parser.RULE_lbl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 108;
        this.label();
        this.state = 110;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===asm8086Parser.T__1) {
            this.state = 109;
            this.match(asm8086Parser.T__1);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AssemblerdirectiveContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = asm8086Parser.RULE_assemblerdirective;
    return this;
}

AssemblerdirectiveContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssemblerdirectiveContext.prototype.constructor = AssemblerdirectiveContext;

AssemblerdirectiveContext.prototype.org = function() {
    return this.getTypedRuleContext(OrgContext,0);
};

AssemblerdirectiveContext.prototype.end = function() {
    return this.getTypedRuleContext(EndContext,0);
};

AssemblerdirectiveContext.prototype.if_ = function() {
    return this.getTypedRuleContext(If_Context,0);
};

AssemblerdirectiveContext.prototype.endif = function() {
    return this.getTypedRuleContext(EndifContext,0);
};

AssemblerdirectiveContext.prototype.equ = function() {
    return this.getTypedRuleContext(EquContext,0);
};

AssemblerdirectiveContext.prototype.db = function() {
    return this.getTypedRuleContext(DbContext,0);
};

AssemblerdirectiveContext.prototype.dw = function() {
    return this.getTypedRuleContext(DwContext,0);
};

AssemblerdirectiveContext.prototype.cseg = function() {
    return this.getTypedRuleContext(CsegContext,0);
};

AssemblerdirectiveContext.prototype.dd = function() {
    return this.getTypedRuleContext(DdContext,0);
};

AssemblerdirectiveContext.prototype.dseg = function() {
    return this.getTypedRuleContext(DsegContext,0);
};

AssemblerdirectiveContext.prototype.title = function() {
    return this.getTypedRuleContext(TitleContext,0);
};

AssemblerdirectiveContext.prototype.include = function() {
    return this.getTypedRuleContext(IncludeContext,0);
};

AssemblerdirectiveContext.prototype.rw = function() {
    return this.getTypedRuleContext(RwContext,0);
};

AssemblerdirectiveContext.prototype.rb = function() {
    return this.getTypedRuleContext(RbContext,0);
};

AssemblerdirectiveContext.prototype.rs = function() {
    return this.getTypedRuleContext(RsContext,0);
};

AssemblerdirectiveContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.enterAssemblerdirective(this);
	}
};

AssemblerdirectiveContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.exitAssemblerdirective(this);
	}
};

AssemblerdirectiveContext.prototype.accept = function(visitor) {
    if ( visitor instanceof asm8086Visitor ) {
        return visitor.visitAssemblerdirective(this);
    } else {
        return visitor.visitChildren(this);
    }
};




asm8086Parser.AssemblerdirectiveContext = AssemblerdirectiveContext;

asm8086Parser.prototype.assemblerdirective = function() {

    var localctx = new AssemblerdirectiveContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, asm8086Parser.RULE_assemblerdirective);
    try {
        this.state = 128;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 112;
            this.org();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 113;
            this.end();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 114;
            this.if_();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 115;
            this.endif();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 116;
            this.equ();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 117;
            this.db();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 118;
            this.dw();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 119;
            this.cseg();
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 120;
            this.dd();
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 121;
            this.dseg();
            break;

        case 11:
            this.enterOuterAlt(localctx, 11);
            this.state = 122;
            this.title();
            break;

        case 12:
            this.enterOuterAlt(localctx, 12);
            this.state = 123;
            this.include();
            break;

        case 13:
            this.enterOuterAlt(localctx, 13);
            this.state = 124;
            this.rw();
            break;

        case 14:
            this.enterOuterAlt(localctx, 14);
            this.state = 125;
            this.rb();
            break;

        case 15:
            this.enterOuterAlt(localctx, 15);
            this.state = 126;
            this.rs();
            break;

        case 16:
            this.enterOuterAlt(localctx, 16);
            this.state = 127;
            this.match(asm8086Parser.T__2);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function RwContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = asm8086Parser.RULE_rw;
    return this;
}

RwContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RwContext.prototype.constructor = RwContext;

RwContext.prototype.RW = function() {
    return this.getToken(asm8086Parser.RW, 0);
};

RwContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

RwContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

RwContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.enterRw(this);
	}
};

RwContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.exitRw(this);
	}
};

RwContext.prototype.accept = function(visitor) {
    if ( visitor instanceof asm8086Visitor ) {
        return visitor.visitRw(this);
    } else {
        return visitor.visitChildren(this);
    }
};




asm8086Parser.RwContext = RwContext;

asm8086Parser.prototype.rw = function() {

    var localctx = new RwContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, asm8086Parser.RULE_rw);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 131;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===asm8086Parser.NAME) {
            this.state = 130;
            this.name();
        }

        this.state = 133;
        this.match(asm8086Parser.RW);
        this.state = 134;
        this.expression();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function RbContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = asm8086Parser.RULE_rb;
    return this;
}

RbContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RbContext.prototype.constructor = RbContext;

RbContext.prototype.RB = function() {
    return this.getToken(asm8086Parser.RB, 0);
};

RbContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

RbContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

RbContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.enterRb(this);
	}
};

RbContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.exitRb(this);
	}
};

RbContext.prototype.accept = function(visitor) {
    if ( visitor instanceof asm8086Visitor ) {
        return visitor.visitRb(this);
    } else {
        return visitor.visitChildren(this);
    }
};




asm8086Parser.RbContext = RbContext;

asm8086Parser.prototype.rb = function() {

    var localctx = new RbContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, asm8086Parser.RULE_rb);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 137;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===asm8086Parser.NAME) {
            this.state = 136;
            this.name();
        }

        this.state = 139;
        this.match(asm8086Parser.RB);
        this.state = 140;
        this.expression();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function RsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = asm8086Parser.RULE_rs;
    return this;
}

RsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RsContext.prototype.constructor = RsContext;

RsContext.prototype.RS = function() {
    return this.getToken(asm8086Parser.RS, 0);
};

RsContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

RsContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

RsContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.enterRs(this);
	}
};

RsContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.exitRs(this);
	}
};

RsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof asm8086Visitor ) {
        return visitor.visitRs(this);
    } else {
        return visitor.visitChildren(this);
    }
};




asm8086Parser.RsContext = RsContext;

asm8086Parser.prototype.rs = function() {

    var localctx = new RsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, asm8086Parser.RULE_rs);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 143;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===asm8086Parser.NAME) {
            this.state = 142;
            this.name();
        }

        this.state = 145;
        this.match(asm8086Parser.RS);
        this.state = 146;
        this.expression();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CsegContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = asm8086Parser.RULE_cseg;
    return this;
}

CsegContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CsegContext.prototype.constructor = CsegContext;

CsegContext.prototype.CSEG = function() {
    return this.getToken(asm8086Parser.CSEG, 0);
};

CsegContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

CsegContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.enterCseg(this);
	}
};

CsegContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.exitCseg(this);
	}
};

CsegContext.prototype.accept = function(visitor) {
    if ( visitor instanceof asm8086Visitor ) {
        return visitor.visitCseg(this);
    } else {
        return visitor.visitChildren(this);
    }
};




asm8086Parser.CsegContext = CsegContext;

asm8086Parser.prototype.cseg = function() {

    var localctx = new CsegContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, asm8086Parser.RULE_cseg);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 148;
        this.match(asm8086Parser.CSEG);
        this.state = 150;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << asm8086Parser.T__3) | (1 << asm8086Parser.T__12) | (1 << asm8086Parser.POINTER) | (1 << asm8086Parser.BYTE) | (1 << asm8086Parser.WORD) | (1 << asm8086Parser.DWORD) | (1 << asm8086Parser.PTR))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (asm8086Parser.NOT - 32)) | (1 << (asm8086Parser.OFFSET - 32)) | (1 << (asm8086Parser.LENGTH - 32)) | (1 << (asm8086Parser.REGISTER - 32)) | (1 << (asm8086Parser.DOLLAR - 32)) | (1 << (asm8086Parser.SIGN - 32)) | (1 << (asm8086Parser.NAME - 32)) | (1 << (asm8086Parser.NUMBER - 32)) | (1 << (asm8086Parser.STRING - 32)))) !== 0)) {
            this.state = 149;
            this.expression();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DsegContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = asm8086Parser.RULE_dseg;
    return this;
}

DsegContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DsegContext.prototype.constructor = DsegContext;

DsegContext.prototype.DSEG = function() {
    return this.getToken(asm8086Parser.DSEG, 0);
};

DsegContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

DsegContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.enterDseg(this);
	}
};

DsegContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.exitDseg(this);
	}
};

DsegContext.prototype.accept = function(visitor) {
    if ( visitor instanceof asm8086Visitor ) {
        return visitor.visitDseg(this);
    } else {
        return visitor.visitChildren(this);
    }
};




asm8086Parser.DsegContext = DsegContext;

asm8086Parser.prototype.dseg = function() {

    var localctx = new DsegContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, asm8086Parser.RULE_dseg);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 152;
        this.match(asm8086Parser.DSEG);
        this.state = 154;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << asm8086Parser.T__3) | (1 << asm8086Parser.T__12) | (1 << asm8086Parser.POINTER) | (1 << asm8086Parser.BYTE) | (1 << asm8086Parser.WORD) | (1 << asm8086Parser.DWORD) | (1 << asm8086Parser.PTR))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (asm8086Parser.NOT - 32)) | (1 << (asm8086Parser.OFFSET - 32)) | (1 << (asm8086Parser.LENGTH - 32)) | (1 << (asm8086Parser.REGISTER - 32)) | (1 << (asm8086Parser.DOLLAR - 32)) | (1 << (asm8086Parser.SIGN - 32)) | (1 << (asm8086Parser.NAME - 32)) | (1 << (asm8086Parser.NUMBER - 32)) | (1 << (asm8086Parser.STRING - 32)))) !== 0)) {
            this.state = 153;
            this.expression();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DwContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = asm8086Parser.RULE_dw;
    return this;
}

DwContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DwContext.prototype.constructor = DwContext;

DwContext.prototype.DW = function() {
    return this.getToken(asm8086Parser.DW, 0);
};

DwContext.prototype.expressionlist = function() {
    return this.getTypedRuleContext(ExpressionlistContext,0);
};

DwContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.enterDw(this);
	}
};

DwContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.exitDw(this);
	}
};

DwContext.prototype.accept = function(visitor) {
    if ( visitor instanceof asm8086Visitor ) {
        return visitor.visitDw(this);
    } else {
        return visitor.visitChildren(this);
    }
};




asm8086Parser.DwContext = DwContext;

asm8086Parser.prototype.dw = function() {

    var localctx = new DwContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, asm8086Parser.RULE_dw);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 156;
        this.match(asm8086Parser.DW);
        this.state = 157;
        this.expressionlist();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DbContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = asm8086Parser.RULE_db;
    return this;
}

DbContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DbContext.prototype.constructor = DbContext;

DbContext.prototype.DB = function() {
    return this.getToken(asm8086Parser.DB, 0);
};

DbContext.prototype.expressionlist = function() {
    return this.getTypedRuleContext(ExpressionlistContext,0);
};

DbContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.enterDb(this);
	}
};

DbContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.exitDb(this);
	}
};

DbContext.prototype.accept = function(visitor) {
    if ( visitor instanceof asm8086Visitor ) {
        return visitor.visitDb(this);
    } else {
        return visitor.visitChildren(this);
    }
};




asm8086Parser.DbContext = DbContext;

asm8086Parser.prototype.db = function() {

    var localctx = new DbContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, asm8086Parser.RULE_db);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 159;
        this.match(asm8086Parser.DB);
        this.state = 160;
        this.expressionlist();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DdContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = asm8086Parser.RULE_dd;
    return this;
}

DdContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DdContext.prototype.constructor = DdContext;

DdContext.prototype.DD = function() {
    return this.getToken(asm8086Parser.DD, 0);
};

DdContext.prototype.expressionlist = function() {
    return this.getTypedRuleContext(ExpressionlistContext,0);
};

DdContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.enterDd(this);
	}
};

DdContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.exitDd(this);
	}
};

DdContext.prototype.accept = function(visitor) {
    if ( visitor instanceof asm8086Visitor ) {
        return visitor.visitDd(this);
    } else {
        return visitor.visitChildren(this);
    }
};




asm8086Parser.DdContext = DdContext;

asm8086Parser.prototype.dd = function() {

    var localctx = new DdContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, asm8086Parser.RULE_dd);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 162;
        this.match(asm8086Parser.DD);
        this.state = 163;
        this.expressionlist();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function EquContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = asm8086Parser.RULE_equ;
    return this;
}

EquContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EquContext.prototype.constructor = EquContext;

EquContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

EquContext.prototype.EQU = function() {
    return this.getToken(asm8086Parser.EQU, 0);
};

EquContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

EquContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.enterEqu(this);
	}
};

EquContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.exitEqu(this);
	}
};

EquContext.prototype.accept = function(visitor) {
    if ( visitor instanceof asm8086Visitor ) {
        return visitor.visitEqu(this);
    } else {
        return visitor.visitChildren(this);
    }
};




asm8086Parser.EquContext = EquContext;

asm8086Parser.prototype.equ = function() {

    var localctx = new EquContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, asm8086Parser.RULE_equ);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 165;
        this.name();
        this.state = 166;
        this.match(asm8086Parser.EQU);
        this.state = 167;
        this.expression();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function If_Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = asm8086Parser.RULE_if_;
    return this;
}

If_Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
If_Context.prototype.constructor = If_Context;

If_Context.prototype.IF = function() {
    return this.getToken(asm8086Parser.IF, 0);
};

If_Context.prototype.assemblerexpression = function() {
    return this.getTypedRuleContext(AssemblerexpressionContext,0);
};

If_Context.prototype.enterRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.enterIf_(this);
	}
};

If_Context.prototype.exitRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.exitIf_(this);
	}
};

If_Context.prototype.accept = function(visitor) {
    if ( visitor instanceof asm8086Visitor ) {
        return visitor.visitIf_(this);
    } else {
        return visitor.visitChildren(this);
    }
};




asm8086Parser.If_Context = If_Context;

asm8086Parser.prototype.if_ = function() {

    var localctx = new If_Context(this, this._ctx, this.state);
    this.enterRule(localctx, 28, asm8086Parser.RULE_if_);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 169;
        this.match(asm8086Parser.IF);
        this.state = 170;
        this.assemblerexpression();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AssemblerexpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = asm8086Parser.RULE_assemblerexpression;
    return this;
}

AssemblerexpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssemblerexpressionContext.prototype.constructor = AssemblerexpressionContext;

AssemblerexpressionContext.prototype.assemblerterm = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AssemblertermContext);
    } else {
        return this.getTypedRuleContext(AssemblertermContext,i);
    }
};

AssemblerexpressionContext.prototype.assemblerlogical = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AssemblerlogicalContext);
    } else {
        return this.getTypedRuleContext(AssemblerlogicalContext,i);
    }
};

AssemblerexpressionContext.prototype.assemblerexpression = function() {
    return this.getTypedRuleContext(AssemblerexpressionContext,0);
};

AssemblerexpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.enterAssemblerexpression(this);
	}
};

AssemblerexpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.exitAssemblerexpression(this);
	}
};

AssemblerexpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof asm8086Visitor ) {
        return visitor.visitAssemblerexpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




asm8086Parser.AssemblerexpressionContext = AssemblerexpressionContext;

asm8086Parser.prototype.assemblerexpression = function() {

    var localctx = new AssemblerexpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, asm8086Parser.RULE_assemblerexpression);
    var _la = 0; // Token type
    try {
        this.state = 185;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case asm8086Parser.NOT:
        case asm8086Parser.SIGN:
        case asm8086Parser.NAME:
        case asm8086Parser.NUMBER:
            this.enterOuterAlt(localctx, 1);
            this.state = 172;
            this.assemblerterm();
            this.state = 178;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===asm8086Parser.T__5 || _la===asm8086Parser.T__6) {
                this.state = 173;
                this.assemblerlogical();
                this.state = 174;
                this.assemblerterm();
                this.state = 180;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case asm8086Parser.T__3:
            this.enterOuterAlt(localctx, 2);
            this.state = 181;
            this.match(asm8086Parser.T__3);
            this.state = 182;
            this.assemblerexpression();
            this.state = 183;
            this.match(asm8086Parser.T__4);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AssemblerlogicalContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = asm8086Parser.RULE_assemblerlogical;
    return this;
}

AssemblerlogicalContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssemblerlogicalContext.prototype.constructor = AssemblerlogicalContext;


AssemblerlogicalContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.enterAssemblerlogical(this);
	}
};

AssemblerlogicalContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.exitAssemblerlogical(this);
	}
};

AssemblerlogicalContext.prototype.accept = function(visitor) {
    if ( visitor instanceof asm8086Visitor ) {
        return visitor.visitAssemblerlogical(this);
    } else {
        return visitor.visitChildren(this);
    }
};




asm8086Parser.AssemblerlogicalContext = AssemblerlogicalContext;

asm8086Parser.prototype.assemblerlogical = function() {

    var localctx = new AssemblerlogicalContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, asm8086Parser.RULE_assemblerlogical);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 187;
        _la = this._input.LA(1);
        if(!(_la===asm8086Parser.T__5 || _la===asm8086Parser.T__6)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AssemblertermContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = asm8086Parser.RULE_assemblerterm;
    return this;
}

AssemblertermContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssemblertermContext.prototype.constructor = AssemblertermContext;

AssemblertermContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

AssemblertermContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};

AssemblertermContext.prototype.NOT = function() {
    return this.getToken(asm8086Parser.NOT, 0);
};

AssemblertermContext.prototype.assemblerterm = function() {
    return this.getTypedRuleContext(AssemblertermContext,0);
};

AssemblertermContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.enterAssemblerterm(this);
	}
};

AssemblertermContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.exitAssemblerterm(this);
	}
};

AssemblertermContext.prototype.accept = function(visitor) {
    if ( visitor instanceof asm8086Visitor ) {
        return visitor.visitAssemblerterm(this);
    } else {
        return visitor.visitChildren(this);
    }
};




asm8086Parser.AssemblertermContext = AssemblertermContext;

asm8086Parser.prototype.assemblerterm = function() {

    var localctx = new AssemblertermContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, asm8086Parser.RULE_assemblerterm);
    try {
        this.state = 193;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case asm8086Parser.NAME:
            this.enterOuterAlt(localctx, 1);
            this.state = 189;
            this.name();
            break;
        case asm8086Parser.SIGN:
        case asm8086Parser.NUMBER:
            this.enterOuterAlt(localctx, 2);
            this.state = 190;
            this.number();
            break;
        case asm8086Parser.NOT:
            this.enterOuterAlt(localctx, 3);
            this.state = 191;
            this.match(asm8086Parser.NOT);
            this.state = 192;
            this.assemblerterm();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function EndifContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = asm8086Parser.RULE_endif;
    return this;
}

EndifContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EndifContext.prototype.constructor = EndifContext;

EndifContext.prototype.ENDIF = function() {
    return this.getToken(asm8086Parser.ENDIF, 0);
};

EndifContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.enterEndif(this);
	}
};

EndifContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.exitEndif(this);
	}
};

EndifContext.prototype.accept = function(visitor) {
    if ( visitor instanceof asm8086Visitor ) {
        return visitor.visitEndif(this);
    } else {
        return visitor.visitChildren(this);
    }
};




asm8086Parser.EndifContext = EndifContext;

asm8086Parser.prototype.endif = function() {

    var localctx = new EndifContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, asm8086Parser.RULE_endif);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 195;
        this.match(asm8086Parser.ENDIF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function EndContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = asm8086Parser.RULE_end;
    return this;
}

EndContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EndContext.prototype.constructor = EndContext;

EndContext.prototype.END = function() {
    return this.getToken(asm8086Parser.END, 0);
};

EndContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.enterEnd(this);
	}
};

EndContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.exitEnd(this);
	}
};

EndContext.prototype.accept = function(visitor) {
    if ( visitor instanceof asm8086Visitor ) {
        return visitor.visitEnd(this);
    } else {
        return visitor.visitChildren(this);
    }
};




asm8086Parser.EndContext = EndContext;

asm8086Parser.prototype.end = function() {

    var localctx = new EndContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, asm8086Parser.RULE_end);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 197;
        this.match(asm8086Parser.END);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function OrgContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = asm8086Parser.RULE_org;
    return this;
}

OrgContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OrgContext.prototype.constructor = OrgContext;

OrgContext.prototype.ORG = function() {
    return this.getToken(asm8086Parser.ORG, 0);
};

OrgContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

OrgContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.enterOrg(this);
	}
};

OrgContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.exitOrg(this);
	}
};

OrgContext.prototype.accept = function(visitor) {
    if ( visitor instanceof asm8086Visitor ) {
        return visitor.visitOrg(this);
    } else {
        return visitor.visitChildren(this);
    }
};




asm8086Parser.OrgContext = OrgContext;

asm8086Parser.prototype.org = function() {

    var localctx = new OrgContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, asm8086Parser.RULE_org);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 199;
        this.match(asm8086Parser.ORG);
        this.state = 200;
        this.expression();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TitleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = asm8086Parser.RULE_title;
    return this;
}

TitleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TitleContext.prototype.constructor = TitleContext;

TitleContext.prototype.TITLE = function() {
    return this.getToken(asm8086Parser.TITLE, 0);
};

TitleContext.prototype.string = function() {
    return this.getTypedRuleContext(StringContext,0);
};

TitleContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.enterTitle(this);
	}
};

TitleContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.exitTitle(this);
	}
};

TitleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof asm8086Visitor ) {
        return visitor.visitTitle(this);
    } else {
        return visitor.visitChildren(this);
    }
};




asm8086Parser.TitleContext = TitleContext;

asm8086Parser.prototype.title = function() {

    var localctx = new TitleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, asm8086Parser.RULE_title);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 202;
        this.match(asm8086Parser.TITLE);
        this.state = 203;
        this.string();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function IncludeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = asm8086Parser.RULE_include;
    return this;
}

IncludeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IncludeContext.prototype.constructor = IncludeContext;

IncludeContext.prototype.INCLUDE = function() {
    return this.getToken(asm8086Parser.INCLUDE, 0);
};

IncludeContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

IncludeContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.enterInclude(this);
	}
};

IncludeContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.exitInclude(this);
	}
};

IncludeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof asm8086Visitor ) {
        return visitor.visitInclude(this);
    } else {
        return visitor.visitChildren(this);
    }
};




asm8086Parser.IncludeContext = IncludeContext;

asm8086Parser.prototype.include = function() {

    var localctx = new IncludeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, asm8086Parser.RULE_include);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 205;
        this.match(asm8086Parser.INCLUDE);
        this.state = 206;
        this.name();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExpressionlistContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = asm8086Parser.RULE_expressionlist;
    return this;
}

ExpressionlistContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionlistContext.prototype.constructor = ExpressionlistContext;

ExpressionlistContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ExpressionlistContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.enterExpressionlist(this);
	}
};

ExpressionlistContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.exitExpressionlist(this);
	}
};

ExpressionlistContext.prototype.accept = function(visitor) {
    if ( visitor instanceof asm8086Visitor ) {
        return visitor.visitExpressionlist(this);
    } else {
        return visitor.visitChildren(this);
    }
};




asm8086Parser.ExpressionlistContext = ExpressionlistContext;

asm8086Parser.prototype.expressionlist = function() {

    var localctx = new ExpressionlistContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, asm8086Parser.RULE_expressionlist);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 208;
        this.expression();
        this.state = 213;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===asm8086Parser.T__7) {
            this.state = 209;
            this.match(asm8086Parser.T__7);
            this.state = 210;
            this.expression();
            this.state = 215;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LabelContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = asm8086Parser.RULE_label;
    return this;
}

LabelContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LabelContext.prototype.constructor = LabelContext;

LabelContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

LabelContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.enterLabel(this);
	}
};

LabelContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.exitLabel(this);
	}
};

LabelContext.prototype.accept = function(visitor) {
    if ( visitor instanceof asm8086Visitor ) {
        return visitor.visitLabel(this);
    } else {
        return visitor.visitChildren(this);
    }
};




asm8086Parser.LabelContext = LabelContext;

asm8086Parser.prototype.label = function() {

    var localctx = new LabelContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, asm8086Parser.RULE_label);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 216;
        this.name();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = asm8086Parser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;

ExpressionContext.prototype.multiplyingExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MultiplyingExpressionContext);
    } else {
        return this.getTypedRuleContext(MultiplyingExpressionContext,i);
    }
};

ExpressionContext.prototype.SIGN = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(asm8086Parser.SIGN);
    } else {
        return this.getToken(asm8086Parser.SIGN, i);
    }
};


ExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.enterExpression(this);
	}
};

ExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.exitExpression(this);
	}
};

ExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof asm8086Visitor ) {
        return visitor.visitExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




asm8086Parser.ExpressionContext = ExpressionContext;

asm8086Parser.prototype.expression = function() {

    var localctx = new ExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, asm8086Parser.RULE_expression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 218;
        this.multiplyingExpression();
        this.state = 223;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,18,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 219;
                this.match(asm8086Parser.SIGN);
                this.state = 220;
                this.multiplyingExpression(); 
            }
            this.state = 225;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,18,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MultiplyingExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = asm8086Parser.RULE_multiplyingExpression;
    return this;
}

MultiplyingExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MultiplyingExpressionContext.prototype.constructor = MultiplyingExpressionContext;

MultiplyingExpressionContext.prototype.argument = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ArgumentContext);
    } else {
        return this.getTypedRuleContext(ArgumentContext,i);
    }
};

MultiplyingExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.enterMultiplyingExpression(this);
	}
};

MultiplyingExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.exitMultiplyingExpression(this);
	}
};

MultiplyingExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof asm8086Visitor ) {
        return visitor.visitMultiplyingExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




asm8086Parser.MultiplyingExpressionContext = MultiplyingExpressionContext;

asm8086Parser.prototype.multiplyingExpression = function() {

    var localctx = new MultiplyingExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, asm8086Parser.RULE_multiplyingExpression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 226;
        this.argument();
        this.state = 231;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 227;
                _la = this._input.LA(1);
                if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << asm8086Parser.T__8) | (1 << asm8086Parser.T__9) | (1 << asm8086Parser.T__10) | (1 << asm8086Parser.T__11))) !== 0))) {
                this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 228;
                this.argument(); 
            }
            this.state = 233;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,19,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ArgumentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = asm8086Parser.RULE_argument;
    return this;
}

ArgumentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgumentContext.prototype.constructor = ArgumentContext;

ArgumentContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};

ArgumentContext.prototype.dollar = function() {
    return this.getTypedRuleContext(DollarContext,0);
};

ArgumentContext.prototype.register_ = function() {
    return this.getTypedRuleContext(Register_Context,0);
};

ArgumentContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

ArgumentContext.prototype.pointer_ = function() {
    return this.getTypedRuleContext(Pointer_Context,0);
};

ArgumentContext.prototype.string = function() {
    return this.getTypedRuleContext(StringContext,0);
};

ArgumentContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ArgumentContext.prototype.ptr = function() {
    return this.getTypedRuleContext(PtrContext,0);
};

ArgumentContext.prototype.NOT = function() {
    return this.getToken(asm8086Parser.NOT, 0);
};

ArgumentContext.prototype.OFFSET = function() {
    return this.getToken(asm8086Parser.OFFSET, 0);
};

ArgumentContext.prototype.LENGTH = function() {
    return this.getToken(asm8086Parser.LENGTH, 0);
};

ArgumentContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.enterArgument(this);
	}
};

ArgumentContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.exitArgument(this);
	}
};

ArgumentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof asm8086Visitor ) {
        return visitor.visitArgument(this);
    } else {
        return visitor.visitChildren(this);
    }
};




asm8086Parser.ArgumentContext = ArgumentContext;

asm8086Parser.prototype.argument = function() {

    var localctx = new ArgumentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, asm8086Parser.RULE_argument);
    try {
        this.state = 266;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 234;
            this.number();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 235;
            this.dollar();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 236;
            this.register_();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 237;
            this.name();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 238;
            this.pointer_();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 239;
            this.string();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 240;
            this.match(asm8086Parser.T__3);
            this.state = 241;
            this.expression();
            this.state = 242;
            this.match(asm8086Parser.T__4);
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 246;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case asm8086Parser.SIGN:
            case asm8086Parser.NUMBER:
            	this.state = 244;
            	this.number();
            	break;
            case asm8086Parser.NAME:
            	this.state = 245;
            	this.name();
            	break;
            case asm8086Parser.T__12:
            	break;
            default:
            	break;
            }
            this.state = 248;
            this.match(asm8086Parser.T__12);
            this.state = 249;
            this.expression();
            this.state = 250;
            this.match(asm8086Parser.T__13);
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 252;
            this.ptr();
            this.state = 253;
            this.expression();
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 255;
            this.match(asm8086Parser.NOT);
            this.state = 256;
            this.expression();
            break;

        case 11:
            this.enterOuterAlt(localctx, 11);
            this.state = 257;
            this.match(asm8086Parser.OFFSET);
            this.state = 258;
            this.expression();
            break;

        case 12:
            this.enterOuterAlt(localctx, 12);
            this.state = 259;
            this.match(asm8086Parser.LENGTH);
            this.state = 260;
            this.expression();
            break;

        case 13:
            this.enterOuterAlt(localctx, 13);
            this.state = 261;
            this.register_();
            this.state = 262;
            this.match(asm8086Parser.T__1);
            this.state = 264;
            this.expression();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function PtrContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = asm8086Parser.RULE_ptr;
    return this;
}

PtrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PtrContext.prototype.constructor = PtrContext;

PtrContext.prototype.PTR = function() {
    return this.getToken(asm8086Parser.PTR, 0);
};

PtrContext.prototype.BYTE = function() {
    return this.getToken(asm8086Parser.BYTE, 0);
};

PtrContext.prototype.WORD = function() {
    return this.getToken(asm8086Parser.WORD, 0);
};

PtrContext.prototype.DWORD = function() {
    return this.getToken(asm8086Parser.DWORD, 0);
};

PtrContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.enterPtr(this);
	}
};

PtrContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.exitPtr(this);
	}
};

PtrContext.prototype.accept = function(visitor) {
    if ( visitor instanceof asm8086Visitor ) {
        return visitor.visitPtr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




asm8086Parser.PtrContext = PtrContext;

asm8086Parser.prototype.ptr = function() {

    var localctx = new PtrContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, asm8086Parser.RULE_ptr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 269;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << asm8086Parser.BYTE) | (1 << asm8086Parser.WORD) | (1 << asm8086Parser.DWORD))) !== 0)) {
            this.state = 268;
            _la = this._input.LA(1);
            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << asm8086Parser.BYTE) | (1 << asm8086Parser.WORD) | (1 << asm8086Parser.DWORD))) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
        }

        this.state = 271;
        this.match(asm8086Parser.PTR);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Pointer_Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = asm8086Parser.RULE_pointer_;
    return this;
}

Pointer_Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Pointer_Context.prototype.constructor = Pointer_Context;

Pointer_Context.prototype.POINTER = function() {
    return this.getToken(asm8086Parser.POINTER, 0);
};

Pointer_Context.prototype.enterRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.enterPointer_(this);
	}
};

Pointer_Context.prototype.exitRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.exitPointer_(this);
	}
};

Pointer_Context.prototype.accept = function(visitor) {
    if ( visitor instanceof asm8086Visitor ) {
        return visitor.visitPointer_(this);
    } else {
        return visitor.visitChildren(this);
    }
};




asm8086Parser.Pointer_Context = Pointer_Context;

asm8086Parser.prototype.pointer_ = function() {

    var localctx = new Pointer_Context(this, this._ctx, this.state);
    this.enterRule(localctx, 58, asm8086Parser.RULE_pointer_);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 273;
        this.match(asm8086Parser.POINTER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DollarContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = asm8086Parser.RULE_dollar;
    return this;
}

DollarContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DollarContext.prototype.constructor = DollarContext;

DollarContext.prototype.DOLLAR = function() {
    return this.getToken(asm8086Parser.DOLLAR, 0);
};

DollarContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.enterDollar(this);
	}
};

DollarContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.exitDollar(this);
	}
};

DollarContext.prototype.accept = function(visitor) {
    if ( visitor instanceof asm8086Visitor ) {
        return visitor.visitDollar(this);
    } else {
        return visitor.visitChildren(this);
    }
};




asm8086Parser.DollarContext = DollarContext;

asm8086Parser.prototype.dollar = function() {

    var localctx = new DollarContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, asm8086Parser.RULE_dollar);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 275;
        this.match(asm8086Parser.DOLLAR);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Register_Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = asm8086Parser.RULE_register_;
    return this;
}

Register_Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Register_Context.prototype.constructor = Register_Context;

Register_Context.prototype.REGISTER = function() {
    return this.getToken(asm8086Parser.REGISTER, 0);
};

Register_Context.prototype.enterRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.enterRegister_(this);
	}
};

Register_Context.prototype.exitRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.exitRegister_(this);
	}
};

Register_Context.prototype.accept = function(visitor) {
    if ( visitor instanceof asm8086Visitor ) {
        return visitor.visitRegister_(this);
    } else {
        return visitor.visitChildren(this);
    }
};




asm8086Parser.Register_Context = Register_Context;

asm8086Parser.prototype.register_ = function() {

    var localctx = new Register_Context(this, this._ctx, this.state);
    this.enterRule(localctx, 62, asm8086Parser.RULE_register_);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 277;
        this.match(asm8086Parser.REGISTER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StringContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = asm8086Parser.RULE_string;
    return this;
}

StringContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StringContext.prototype.constructor = StringContext;

StringContext.prototype.STRING = function() {
    return this.getToken(asm8086Parser.STRING, 0);
};

StringContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.enterString(this);
	}
};

StringContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.exitString(this);
	}
};

StringContext.prototype.accept = function(visitor) {
    if ( visitor instanceof asm8086Visitor ) {
        return visitor.visitString(this);
    } else {
        return visitor.visitChildren(this);
    }
};




asm8086Parser.StringContext = StringContext;

asm8086Parser.prototype.string = function() {

    var localctx = new StringContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, asm8086Parser.RULE_string);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 279;
        this.match(asm8086Parser.STRING);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function NameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = asm8086Parser.RULE_name;
    return this;
}

NameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NameContext.prototype.constructor = NameContext;

NameContext.prototype.NAME = function() {
    return this.getToken(asm8086Parser.NAME, 0);
};

NameContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.enterName(this);
	}
};

NameContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.exitName(this);
	}
};

NameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof asm8086Visitor ) {
        return visitor.visitName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




asm8086Parser.NameContext = NameContext;

asm8086Parser.prototype.name = function() {

    var localctx = new NameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, asm8086Parser.RULE_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 281;
        this.match(asm8086Parser.NAME);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function NumberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = asm8086Parser.RULE_number;
    return this;
}

NumberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberContext.prototype.constructor = NumberContext;

NumberContext.prototype.NUMBER = function() {
    return this.getToken(asm8086Parser.NUMBER, 0);
};

NumberContext.prototype.SIGN = function() {
    return this.getToken(asm8086Parser.SIGN, 0);
};

NumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.enterNumber(this);
	}
};

NumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.exitNumber(this);
	}
};

NumberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof asm8086Visitor ) {
        return visitor.visitNumber(this);
    } else {
        return visitor.visitChildren(this);
    }
};




asm8086Parser.NumberContext = NumberContext;

asm8086Parser.prototype.number = function() {

    var localctx = new NumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, asm8086Parser.RULE_number);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 284;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===asm8086Parser.SIGN) {
            this.state = 283;
            this.match(asm8086Parser.SIGN);
        }

        this.state = 286;
        this.match(asm8086Parser.NUMBER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function OpcodeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = asm8086Parser.RULE_opcode;
    return this;
}

OpcodeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OpcodeContext.prototype.constructor = OpcodeContext;

OpcodeContext.prototype.OPCODE = function() {
    return this.getToken(asm8086Parser.OPCODE, 0);
};

OpcodeContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.enterOpcode(this);
	}
};

OpcodeContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.exitOpcode(this);
	}
};

OpcodeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof asm8086Visitor ) {
        return visitor.visitOpcode(this);
    } else {
        return visitor.visitChildren(this);
    }
};




asm8086Parser.OpcodeContext = OpcodeContext;

asm8086Parser.prototype.opcode = function() {

    var localctx = new OpcodeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, asm8086Parser.RULE_opcode);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 288;
        this.match(asm8086Parser.OPCODE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function RepContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = asm8086Parser.RULE_rep;
    return this;
}

RepContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RepContext.prototype.constructor = RepContext;

RepContext.prototype.REP = function() {
    return this.getToken(asm8086Parser.REP, 0);
};

RepContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.enterRep(this);
	}
};

RepContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.exitRep(this);
	}
};

RepContext.prototype.accept = function(visitor) {
    if ( visitor instanceof asm8086Visitor ) {
        return visitor.visitRep(this);
    } else {
        return visitor.visitChildren(this);
    }
};




asm8086Parser.RepContext = RepContext;

asm8086Parser.prototype.rep = function() {

    var localctx = new RepContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, asm8086Parser.RULE_rep);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 290;
        this.match(asm8086Parser.REP);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CommentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = asm8086Parser.RULE_comment;
    return this;
}

CommentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CommentContext.prototype.constructor = CommentContext;

CommentContext.prototype.COMMENT = function() {
    return this.getToken(asm8086Parser.COMMENT, 0);
};

CommentContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.enterComment(this);
	}
};

CommentContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8086Listener ) {
        listener.exitComment(this);
	}
};

CommentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof asm8086Visitor ) {
        return visitor.visitComment(this);
    } else {
        return visitor.visitChildren(this);
    }
};




asm8086Parser.CommentContext = CommentContext;

asm8086Parser.prototype.comment = function() {

    var localctx = new CommentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, asm8086Parser.RULE_comment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 292;
        this.match(asm8086Parser.COMMENT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.asm8086Parser = asm8086Parser;
