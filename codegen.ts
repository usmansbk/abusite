import type {CodegenConfig} from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:4000/graphql',
  documents: 'src/graphql/queries/*.ts',
  generates: {
    'src/graphql/__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      },
      config: {
        useTypeImports: true,
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
