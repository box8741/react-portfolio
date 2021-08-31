/*  ---  설치 라이브러리 목록 ---
typescript                                  타입 스크립트
eslint                                      코드의 문법을 검사하는 lint와 코드의 스타일을 잡아주는 포맷팅 기능
prettier                                    코드의 스타일을 잡아주는 포맷팅 기능
@typescript-eslint/eslint-plugin            Typescript 관련 린팅규칙을 설정하는 플러그인
@typescript-eslint/parser                   Typescript 를 파싱하기 위해 사용
eslint-config-prettier                      prettier와 충돌을 일으키는 ESLint 규칙들을 비활성화 시키는 config
eslint-plugin-prettier                      Prettier에서 인식하는 코드상의 포맷 오류를 ESLint 오류로 출력
eslint-plugin-react                         React에 관한 lint설정을 지원

react-native 기준 ( --template react-native-template-typescript )
yarn add @types/jest @types/react @types/react-native @types/react-test-renderer
yarn add -D typescript eslint prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-prettier eslint-plugin-react

react 기준 ( --template typescript )
yarn add @types/node @types/react @types/react-dom @types/jest
yarn add -D typescript eslint prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-prettier eslint-plugin-react
*/

module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    fetch: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint', 'prettier'],
  extends: [
    // "@react-native-community",
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'react/display-name': 'off',
    'react/prop-types': 'off',

    'prettier/prettier': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/typedef': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'no-trailing-spaces': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    semi: 'off',
  },
  // overrides: [
  //   {
  //     files: ['*.ts', '*.tsx'],
  //     rules: {
  //       '@typescript-eslint/explicit-function-return-type': ['error'],
  //       '@typescript-eslint/explicit-module-boundary-types': ['error'],
  //       '@typescript-eslint/typedef': ['error', { variableDeclaration: true, variableDeclarationIgnoreFunction: true }],
  //     },
  //   },
  // ],
  settings: {
    react: {
      version: 'detect',
    },
  },
}
