import { MantineProvider, createEmotionCache } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import type { FC, ReactNode } from 'react';
import { theme } from './theme';

const myCache = createEmotionCache({ key: 'mantine' });

type MantineProps = {
	children?: ReactNode;
};

const Mantine: FC<MantineProps> = (props) => {
	const { children } = props;

	return (
		<MantineProvider withGlobalStyles withNormalizeCSS theme={theme} emotionCache={myCache}>
			<Notifications />
			{children}
		</MantineProvider>
	);
};

export default Mantine;
