import { Avatar, AvatarProps, Skeleton } from '@nextui-org/react';

export const AirlineLogo = (props: AvatarProps) => {
  return (
    <Avatar
      size="sm"
      fallback={<Skeleton className="flex size-8 rounded-full" />}
      {...props}
    />
  );
};
