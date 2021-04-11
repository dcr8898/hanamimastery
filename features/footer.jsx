/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import NextLink from 'next/link';
import { Link, Typography } from '@material-ui/core';

export default function footer() {
  return (
    <Typography component="footer" align="center" gutterBottom>
      Copyright © Driggl 2020.&nbsp;
      <NextLink href="/privacy-policy" passHref>
        <Link>Privacy Policy</Link>
      </NextLink>
    </Typography>
  );
}
