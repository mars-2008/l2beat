import { RISK } from './common'
import { Project } from './types'

export const zktube: Project = {
    name: 'zkTube',
    slug: 'zktube',
    bridges: [
      {
        address: '0xF991c0e209Ec116A3AbD6cc020a503b1d629676b',
        sinceBlock: 13183161,
        tokens: ['ETH', 'ZKT', 'ZKTR', 'USDT', 'WBTC', 'DAI', 'PAX', 'TUSD', 'GUSD', 'EURS', 'USDC'],
      },
    ],
    details: {
      links: {
        websites: ['https://zktube.io/'],
        apps: ['https://wallet.zktube.io/wallet/'],
        documentation: ['http://docs.zktube.io/'],
        explorers: ['https://rinkeby-browser.zktube.io/'],
        repositories: ['https://github.com/zkTube-Labs'],
        socialMedia: [
          'https://gitter.im/zkTube-Labs/community',
          'https://twitter.com/zktubeofficial',
          'https://www.facebook.com/zkTube.official/',
          'https://t.me/zkTubeProtocol',
          'https://zktube.medium.com/',
          'https://discord.gg/xtVdMCr54q',
        ],
      },
      technologyName: 'ZK Rollup',
      technologyDetails: 'ZK-PLONK',
      purpose: 'Payments',
      riskView: {
        stateCorrectness: RISK.SNARK_PROOFS,
        dataAvailability: RISK.DATA_ON_CHAIN,
        censorshipResistance: RISK.UNKNOWN,
        upgradeability: RISK.UPGRADABLE,
        owner: RISK.MULTISIG_OWNER,
      },
      parameters: [
        {
          name: 'Primary use case', 
          value: 'Payments',
        },
        {
          name: 'Hypothetical level of decentralization',
          value: 'High',
          sentiment: 'good',
        },
        {
          name: 'Current level of decentralization',
          value: 'Low',
          tooltip: 'Contracts are upgradable',
          sentiment: 'bad',
        },
        {
          name: 'Privacy',
          value: 'No',
          tooltip: 'Theoretically possible in the future',
        },
        {
          name: 'Smart contracts',
          value: 'No',
          tooltip:
            'Possible in the near future',
        },
        {
          name: 'Mining support',
          value: 'yes',
        },
      ],
      news: [
        {
          date: '2021-09-11',
          name: 'zkTube Weekly Report 9.4–9.10',
          link: 'https://zktube.medium.com/zktube-weekly-report-9-4-9-10-a0e30ea8ad24',
        },
        {
          date: '2021-08-27',
          name: 'Announcement on zkTube “Global Support Plan” Launches',
          link: 'https://zktube.medium.com/announcement-on-zktube-global-support-plan-launches-416697b33365',
        },
        {
          date: '2021-08-25',
          name: 'zkTube and ONEUNI Capital Set Up $10 Million Seed Fund to Help GameFi Develop',
          link: 'https://zktube.medium.com/zktube-and-oneuni-capital-set-up-10-million-seed-fund-to-help-gamefi-develop-6c4f18d5a87',
        },
        {
          date: '2021-08-19',
          name: 'PayTube Wallet Review: An Innovative Wallet with Multi-factor Security & High Throughput',
          link: 'https://zktube.medium.com/paytube-wallet-an-innovative-wallet-with-multi-factor-security-high-throughput-review-a27013b4538c',
        },
        {
          date: '2021-08-16',
          name: 'zkTube Large Mining Pool will be Deployed in Canada, with an Investment of up to $24 Million',
          link: 'https://zktube.medium.com/zktube-large-mining-pool-will-be-deployed-in-canada-with-an-investment-of-up-to-24-million-c84711adec85',
        },
        {
          date: '2021-08-11',
          name: 'zkTube Joins the Enterprise Ethereum Alliance (EEA)',
          link: 'https://zktube.medium.com/zktube-joins-the-enterprise-ethereum-alliance-eea-ff092379f16e',
        },
        {
          date: '2021-08-07',
          name: 'zkTube Weekly Report（8.1–8.6）',
          link: 'https://zktube.medium.com/zktube-weekly-report-8-1-8-6-61ef1911ab9e',
        },
        {
          date: '2021-07-30',
          name: 'zkTube Monthly Report-July 2021',
          link: 'https://zktube.medium.com/zktube-monthly-report-july-2021-9daf1784605a',
        },
        {
          date: '2021-07-29',
          name: 'zkTube Labs Establishes Strategic Partnership With Mixin Network',
          link: 'https://zktube.medium.com/zktube-labs-establishes-strategic-partnership-with-mixin-network-719199dd80c',
        },
        {
          date: '2021-07-23',
          name: 'zkTube Weekly Repor',
          link: 'https://zktube.medium.com/zktube-weekly-report-7-17-7-23-c687c2ba2fd',
        },
        {
          date: '2021-07-22',
          name: 'The zkTube Labs Scaling Solution Release Conference was Successfully Held in Shanghai',
          link: 'https://zktube.medium.com/the-zktube-labs-scaling-solution-release-conference-was-successfully-held-in-shanghai-25cf89f81f9e',
        },
        {
          date: '2021-07-21',
          name: 'zkTube Candy Airdrop Claim Tutorial',
          link: 'https://zktube.medium.com/zktube-candy-airdrop-claim-tutorial-76d34da965a9',
        },
      ],
    },
  }