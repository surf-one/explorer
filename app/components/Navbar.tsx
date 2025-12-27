'use client';

import Logo from '@img/logos-solana/dark-explorer-logo.svg';
import { useDisclosure } from '@mantine/hooks';
import { useClusterPath } from '@utils/url';
import Image from 'next/image';
import Link from 'next/link';
import { useSelectedLayoutSegment, useSelectedLayoutSegments } from 'next/navigation';
import React, { ReactNode } from 'react';

import { ClusterStatusButton } from './ClusterStatusButton';

export interface INavbarProps {
    children?: ReactNode;
}

export function Navbar({ children }: INavbarProps) {
    const [navOpened, navHandlers] = useDisclosure(false);
    const homePath = useClusterPath({ pathname: '/' });
    const featureGatesPath = useClusterPath({ pathname: '/feature-gates' });
    const supplyPath = useClusterPath({ pathname: '/supply' });
    const programsPath = useClusterPath({ pathname: '/verified-programs' });
    const inspectorPath = useClusterPath({ pathname: '/tx/inspector' });
    const selectedLayoutSegment = useSelectedLayoutSegment();
    const selectedLayoutSegments = useSelectedLayoutSegments();
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container px-4">
                <Link href={homePath}>
                    <Image alt="Solana Explorer" height={22} src={Logo} width={214} priority />
                </Link>

                <button className="navbar-toggler" type="button" onClick={navHandlers.toggle}>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="navbar-children d-flex align-items-center flex-grow-1 h-100 d-none d-lg-block"
                    style={{ minWidth: 0 }}
                >
                    {children}
                </div>

                <div className="d-none d-lg-block flex-shrink-0 ms-1">
                    <ClusterStatusButton />
                </div>
            </div>
        </nav>
    );
}
