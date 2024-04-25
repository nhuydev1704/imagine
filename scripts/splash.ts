import { execSync } from 'child_process';

(function () {
  const { argv } = process;

  const actualArgv = argv.slice(2);

  const [path, bgColor, width, flavor] = actualArgv;

  execSync(
    `yarn react-native generate-bootsplash ${path} --background=${bgColor} --platforms=android,ios --logo-width=${width}  --assets-output=assets --flavor=${flavor}`,
    { stdio: 'inherit' },
  );
})();
