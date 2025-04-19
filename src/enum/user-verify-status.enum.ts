enum UserVerifyStatus {
  UNVERIFIED = 'UNVERIFIED', // chưa xác thực email
  VERIFIED = 'VERIFIED', // đã xác thực email
  BANNER = 'BANNER', // đã xác thực email và đã được cấp banner
}
export default UserVerifyStatus;