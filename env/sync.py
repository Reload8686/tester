import asyncio

async def main():
    print('Hi ...')
    await asyncio.sleep(1)
    print('... World!')

asyncio.run(main())
