'use client'

import { useState, useEffect } from 'react'

interface quote {
  id: number
  quote: string
  author: string
}

type QuotesProps = quote[];

export default function QuotesClient({ quotes, error }: QuotesProps) {
  return (
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.15.1/cdn/themes/light.css" />
      <script type="module" src="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.15.1/cdn/shoelace-autoloader.js"></script>

      <sl-breadcrumb>
          <sl-breadcrumb-item href="/">Home</sl-breadcrumb-item>
          <sl-breadcrumb-item href="/Recipes">Recipes</sl-breadcrumb-item>
      </sl-breadcrumb>

      <h1>Quotes</h1>

      ${error ? `]
          <sl-alert variant="warning" open data-test-id="load-error-alert">
              <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
              <strong>Cannot load recipes</strong><br />
              Please try again for a while.
          </sl-alert>
      ` : ''}

      ${quotes.map(quote => `
          <sl-card style="max-width: 250px" data-test-id="quote">
              <strong>Quote ${quote.quote}</strong>
              <br>
              <div>
                  <h3>${quote.author}</h3>
              </div>
          </sl-card>`
      ).join('')}
  )
}
