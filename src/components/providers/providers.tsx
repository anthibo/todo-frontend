'use client'

import React from 'react'
import { ApolloProvider } from './ApolloProvider'
import { ChakraUIProvider } from './ChakraUIProvider'

export default function Providers({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <ApolloProvider>
            <ChakraUIProvider>
                {children}
            </ChakraUIProvider>
        </ApolloProvider>
    )
}
