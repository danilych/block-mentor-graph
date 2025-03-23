import {
  OwnershipTransferred as OwnershipTransferredEvent,
  TokenCreated as TokenCreatedEvent,
  OmnichainTokenCreated as OmnichainTokenCreatedEvent
} from "../generated/TokenFactory/TokenFactory"
import { OwnershipTransferred, TokenCreated, OmnichainTokenCreated } from "../generated/schema"

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokenCreated(event: TokenCreatedEvent): void {
  let entity = new TokenCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.token = event.params.token
  entity.name = event.params.name
  entity.ticker = event.params.ticker
  entity.initialAmount = event.params.initialAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOmnichainTokenCreated(
  event: OmnichainTokenCreatedEvent
): void {
  let entity = new OmnichainTokenCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.token = event.params.token
  entity.name = event.params.name
  entity.ticker = event.params.ticker
  entity.initialAmount = event.params.initialAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}