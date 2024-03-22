import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';

export const DeviceType = {
  DESKTOP: 'DESKTOP',
  MOBILE: 'MOBILE',
} as const;
export type DeviceType = typeof DeviceType[keyof typeof DeviceType];

type Props = {
  children: ({ deviceType }: { deviceType: DeviceType }) => ReactNode;
};

export function GetDeviceType({ children }: Props) {
  const [deviceType, setDeviceType] = useState<DeviceType>(
    window.innerWidth >= 1024 ? DeviceType.DESKTOP : DeviceType.MOBILE,
  );

  const observer = new ResizeObserver(() => {
    setDeviceType(window.innerWidth >= 1024 ? DeviceType.DESKTOP : DeviceType.MOBILE);
  });

  useEffect(() => {
    observer.observe(window.document.body);
    return () => {
      observer.disconnect();
    };
  }, []);

  return <>{children({ deviceType })}</>;
}
