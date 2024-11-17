import React from 'react'

import { Box, Stack, Typography } from '@mui/material'

export const HeroCover = () => {
  return (
    <Stack
      alignItems="center"
      sx={{
        overflow: 'hidden',
        width: '100%',
        pt: 10,
        gap: 10
      }}
    >
      <Stack
        alignItems="start"
        sx={{
          maxWidth: 1200,
          width: '80%'
        }}
      >
        {/* Add key prop to rerender video */}
        <Typography
          variant="h2"
          sx={{
            fontSize: 36,
            fontWeight: 700,
            fontFamily: "Outfit",
            color: "#101010"
          }}
        >
          会いに行くように
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: 36,
            fontWeight: 700,
            fontFamily: "Outfit",
            color: "#101010"
          }}
        >
          デジタルでギフトを贈ろう
        </Typography>
      </Stack>
      <Stack>
        <Box
          component="img"
          src="https://zeft.app/home/FV.png"
          sx={{
            width: 2000
          }}
        />
      </Stack>
    </Stack>
  )
}
