import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  OwnershipTransferred,
  TokenCreated
} from "../generated/TokenFactory/TokenFactory"

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent =
    changetype<OwnershipTransferred>(newMockEvent())

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createTokenCreatedEvent(
  owner: Address,
  token: Address,
  name: string,
  ticker: string,
  initialAmount: BigInt
): TokenCreated {
  let tokenCreatedEvent = changetype<TokenCreated>(newMockEvent())

  tokenCreatedEvent.parameters = new Array()

  tokenCreatedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  tokenCreatedEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  tokenCreatedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  tokenCreatedEvent.parameters.push(
    new ethereum.EventParam("ticker", ethereum.Value.fromString(ticker))
  )
  tokenCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "initialAmount",
      ethereum.Value.fromUnsignedBigInt(initialAmount)
    )
  )

  return tokenCreatedEvent
}
