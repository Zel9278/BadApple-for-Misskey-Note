# BadApple for Misskey
MisskeyにBadAppleを再生します。  
**このプログラムは公開サーバーや他のサーバーに送るようなものではありません、ご注意ください。**

## つけぇかた
1. Nodejsをインストールします。
2. `git clone https://github.com/Zel9278/BadApple-for-Misskey-Note`をします。
3. example.envを.envに変更し、MisskeyのURLとトークンを設定します。
4. あーっ！！！！！！！！！！お客様！困ります！あーっ！！！！あー！！！おきゃっあーーーーーー！！！！！！！
### MisskeyのUIの設定
5. https://<あなたのURL>/settings/general に移動します
6. カスタムCSSを設定します
```
.xDn7E > div > div > button {
  display: none !important;
}

.xDn7E > div > .xhI9l {
  max-height: 100% !important;
}
```
7. 管理者に問い合わせるか、自分が管理者の場合、レートリミットをすごーーーーーーーーーーーーーーーーーーーーーーーーーーく緩めます
https://<あなたのURL>/admin/roles -> 管理者用のロール -> 編集 -> レートリミット  
![](https://cdn.discordapp.com/attachments/963367800821395466/1203277696944181299/chrome_fBoYEbyvMz.png)  
-> 保存
8. コンソールで`node .`をしてGO TO BADAPPLEします。
