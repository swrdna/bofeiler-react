import path from 'path';
import { defineConfig, loadEnv } from '@farmfe/core';
import farmJsPluginSvgr from '@farmfe/js-plugin-svgr';
import farmJsTailwindcss from '@farmfe/js-plugin-tailwindcss';

interface IConfigArgs {
  mode: 'development' | 'test' | 'production';
}

export default ({ mode }: IConfigArgs) => {
  const env = loadEnv(mode, process.cwd());

  return defineConfig({
    plugins: ['@farmfe/plugin-react', farmJsPluginSvgr(), farmJsTailwindcss()],
    compilation: {
      sourcemap: mode !== 'production',
      resolve: {
        alias: { '@': path.join(process.cwd(), 'src') },
      },
    },
    server: {
      port: Number(env.FARM_SERVER_PORT),
      host: Boolean(env.FARM_SERVER_HOST === 'true'),
    },
  });
};
