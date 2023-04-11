export const shortenAddress = (
  address: string,
  leftPosition = 6,
  rightPosition = 25
) =>
  address
    ?.replace(
      address.split('').splice(leftPosition, rightPosition).join('') as string,
      '...'
    )
    .toLowerCase();
