import { arbitrum } from './arbitrum'
import { aztec } from './aztec'
import { deversifi } from './deversifi'
import { dydx } from './dydx'
import { fuel } from './fuel'
import { habitat } from './habitat'
import { hermez } from './hermez'
import { immutablex } from './immutablex'
import { layer2finance } from './layer2finance'
import { leverj } from './leverj'
import { loopring } from './loopring'
import { nahmii } from './nahmii'
import { omgnetwork } from './omgnetwork'
import { optimism } from './optimism'
import { sorare } from './sorare'
import { Project } from './types'
import { zkswap } from './zkswap'
import { zksync } from './zksync'
import { zktube } from './zktube'

export * from './types'

export const projects: Project[] = [
  arbitrum,
  aztec,
  deversifi,
  dydx,
  fuel,
  habitat,
  hermez,
  immutablex,
  layer2finance,
  leverj,
  loopring,
  nahmii,
  omgnetwork,
  optimism,
  sorare,
  zkswap,
  zksync,
  zktube,
]
