namespace safeHead {
    function safeHead<T>(array: <T>[], defaultValue: T): T {
        return array[0] ?? defaultValue
    }

    let input1 = [1,2,3]
    let res1 = safeHead(input1, 0)

    type test1 = Expect<Equal<typeof res1, number>>

    let input2 = ["hello", "hola", "Bonjourn"]
    let res2 = safeHead(input2, "Hi");

    type test2 = Expect<Equal<typeof res2, string>>
}
