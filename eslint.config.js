import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import prettier from 'eslint-plugin-prettier'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import tseslint from 'typescript-eslint'
import boundaries from 'eslint-plugin-boundaries'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'prettier': prettier,
      'simple-import-sort': simpleImportSort,
      'boundaries': boundaries,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react-hooks/exhaustive-deps': 'off',
      'boundaries/element-types': [
        'error',
        {
          'default': 'allow',
          'rules': [
            {
              'from': 'shared',
              'disallow': [
                'app',
                'pages',
                'widgets',
                'features',
                'entities'
              ],
              'message': 'import in shared scope from app, pages, widgets, features, entities is forbidden'
            },
            {
              'from': 'entities',
              'disallow': [
                'app',
                'pages',
                'widgets',
                'features',
              ],
              'message': 'import in entities scope from app, pages, widgets, features is forbidden'
            },
            {
              'from': 'features',
              'disallow': [
                'app',
                'pages',
                'widgets',
              ],
              'message': 'import in features scope from app, pages, widgets is forbidden'
            },
            {
              'from': 'widgets',
              'disallow': [
                'app',
                'pages'
              ],
              'message': 'import in widgets scope from app, pages is forbidden'
            },
            {
              'from': 'pages',
              'disallow': [
                'app',
              ],
              'message': 'import in widgets scope from app is forbidden'
            },
          ]
        }
      ],
      'simple-import-sort/imports': [
        'warn',
        {
          groups: [
            // common types
            ['^@/types'],
            // Packages. `react` related packages come first.
            ['^react', '^@?\\w'],
            // Internal packages.
            // api
            ['^@?\\/api'],
            // api
            ['^@?\\/utils'],
            // misc
            ['^@?\\/[^(ui|api|utils)]'],
            // UI
            ['^@?\\/ui\\/[^ce]', '^@?\\/ui\\/e', '^@?\\/ui\\/c'],
            // Side effect imports.
            ['^\\u0000'],
            // Parent imports. Put `..` last.
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            // Other relative imports. Put same-folder imports and `.` last.
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            // Style imports.
            ['^.+\\.s?css$'],
          ],
        },
      ],
      'simple-import-sort/exports': 'warn',
      'prettier/prettier': [
        'warn', {
          endOfLine: 'auto'
        }
      ],
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'interface',
          format: ['PascalCase'],
        },
        {
          selector: 'typeAlias',
          format: ['PascalCase'],
        },
        {
          selector: 'class',
          format: ['PascalCase'],
        },
        {
          selector: 'classMethod',
          format: ['PascalCase'],
        },
        {
          selector: 'classProperty',
          modifiers: ['public', 'protected'],
          format: ['PascalCase'],
        },
        {
          selector: 'classProperty',
          modifiers: ['private', 'static'],
          format: ['PascalCase'],
        },
        {
          selector: 'classProperty',
          modifiers: ['private'],
          format: ['camelCase'],
          prefix: ['_']
        },
        {
          selector: 'method',
          format: ['camelCase'],
        },
        {
          selector: 'variable',
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        },
        {
          selector: 'objectLiteralMethod',
          format: ['camelCase', 'UPPER_CASE']
        },
        {
          selector: 'objectLiteralProperty',
          format: ['camelCase', 'UPPER_CASE']
        },
        {
          selector: 'typeMethod',
          format: ['camelCase']
        },
        {
          selector: 'typeParameter',
          format: ['UPPER_CASE', 'PascalCase'],
        },
        {
          selector: 'typeProperty',
          format: ['camelCase']
        }
      ],
      "lines-between-class-members": ["error", "always"],
    },
    settings: {
      'import/resolver': {
        'typescript': {
          'project': 'tsconfig.app.json'
        }
      }
    }
  },
)
