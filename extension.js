const vscode = require('vscode');
const path = require('path');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	let disposable = vscode.commands.registerCommand('copy-file-name-and-line-number.default', function () {
		// The code you place here will be executed every time your command is executed

		if (vscode.window.activeTextEditor) {
			if (vscode.workspace) {
				vscode.env.clipboard.writeText(
					path.relative(vscode.workspace.rootPath, vscode.window.activeTextEditor.document.fileName) + ':' + (vscode.window.activeTextEditor.selection.active.line + 1)
				);
			} else {
				vscode.env.clipboard.writeText(
					vscode.window.activeTextEditor.document.fileName + ':' + (vscode.window.activeTextEditor.selection.active.line + 1)
				);
			}
		}
	});

	context.subscriptions.push(disposable);
}
exports.activate = activate;

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
