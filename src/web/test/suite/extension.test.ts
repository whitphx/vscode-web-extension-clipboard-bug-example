import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
// import * as myExtension from '../../extension';

suite('Web Extension Test Suite', () => {
  vscode.window.showInformationMessage('Start all tests.');

  test('Clipboard test', async () => {
    const doc = await vscode.workspace.openTextDocument({ content: '' })
    await vscode.window.showTextDocument(doc);
    assert.ok(vscode.window.activeTextEditor);

    vscode.env.clipboard.writeText('foo');
    await vscode.commands.executeCommand('editor.action.clipboardPasteAction');
    await new Promise((resolve) => setTimeout(resolve, 100));  // HACK: This delay is necessary for the clipboard text to be pasted to the editor.
    assert.strictEqual(doc.getText(), 'foo');
  });
});
