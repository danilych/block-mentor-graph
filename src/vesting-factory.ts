import {
  VestingScheduleCreated as VestingScheduleCreatedEvent
} from "../generated/VestingFactory/VestingFactory"
import { VestingScheduleCreated } from "../generated/schema"

export function handleVestingScheduleCreated(
  event: VestingScheduleCreatedEvent
): void {
  let entity = new VestingScheduleCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.vestingContract = event.params.vestingContract
  entity.beneficiary = event.params.beneficiary
  entity.totalAmount = event.params.totalAmount
  entity.start = event.params.start
  entity.periodDuration = event.params.periodDuration
  entity.totalPeriods = event.params.totalPeriods
  entity.tokenName = event.params.tokenName
  entity.tokenSymbol = event.params.tokenSymbol
  entity.token = event.params.token

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
