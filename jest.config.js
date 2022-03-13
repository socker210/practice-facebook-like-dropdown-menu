module.exports = {
  snapshotSerializers: ['@emotion/jest/serializer'],
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
}
