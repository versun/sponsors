import { defineConfig, tierPresets } from 'sponsorkit'

export default defineConfig({
  // Rendering configs
  width: 800,
  formats: ['svg', 'png'],
  tiers: [
    // Past sponsors, currently only supports GitHub
    {
      title: 'Past Sponsors',
      monthlyDollars: -1,
      preset: tierPresets.xs,
    },
    // Default tier
    {
      title: 'Backers',
      preset: tierPresets.base,
    },
    {
      title: 'Sponsors',
      monthlyDollars: 0.5,
      preset: tierPresets.medium,
    },
    {
      title: 'Silver Sponsors',
      monthlyDollars: 1,
      preset: tierPresets.large,
    },
    {
      title: 'Gold Sponsors',
      monthlyDollars: 5,
      preset: tierPresets.xl,
    },
  ],
})