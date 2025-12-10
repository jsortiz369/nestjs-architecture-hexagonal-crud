const [major, minor] = process.versions.node.split('.').map(Number);

if (major < 22 || (major === 22 && minor < 20)) {
  console.error(`❌ Node >= 22.20.0 is required. Current version: ${process.version}`);
  process.exit(1);
}
