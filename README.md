# TS300Challenges

300のTypeScriptコーディングチャレンジで学習と練習を行うためのリポジトリです。

## 概要

このプロジェクトは、TypeScriptの構文、型システム、アルゴリズム、問題解決スキルを実践的に学ぶための300個のチャレンジを提供します。難易度別に整理されており、初心者から上級者まで段階的に学習できます。

## セットアップ

```bash
# 依存関係のインストール
npm install

# プロジェクトのビルド
npm run build

# テストの実行
npm test
```

## チャレンジの構成

チャレンジは難易度別に6つのセクションに分かれています:

- **001-050**: 基礎レベル - TypeScriptの基本構文と型
- **051-100**: 初級レベル - 基本的なアルゴリズムとデータ構造
- **101-150**: 中級レベル - より複雑な問題解決
- **151-200**: 上級レベル - 高度な型システムとパターン
- **201-250**: エキスパートレベル - 複雑なアルゴリズムと最適化
- **251-300**: マスターレベル - 最高難易度の課題

## 使い方

各チャレンジは以下の構造になっています:

```
src/challenges/XXX-YYY/
├── challengeNNN.ts       # チャレンジの実装
└── challengeNNN.test.ts  # テストケース
```

### 個別のチャレンジをテストする

```bash
npm test -- challenge001
```

### 特定のテストを実行する

```bash
npm test -- -t "test name"
```

### コードの品質チェック

```bash
# リントの実行
npm run lint

# 自動修正
npm run lint:fix

# フォーマット
npm run format
```

## 開発ガイドライン

- すべての関数に適切な型注釈を付ける
- 各チャレンジには包括的なテストを含める
- TypeScriptの厳格モードに準拠する
- エッジケースを考慮する
- わかりやすい関数名と変数名を使用する

## 参考資料

- [TypeScript公式ドキュメント (日本語)](https://www.typescriptlang.org/ja/docs/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

## ライセンス

MIT
