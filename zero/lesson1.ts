namespace genericFunction {
    //function identity(a: TODO): TODO {
    function identity<T>(a: T): T {
        return a
    }

    let input1 = 10
    let res1 = identity(input1)

    type test1 = Expect<Equal<typeof rest1, number>>

    let input2 = "Hello"
    let res = identity(input2)

    type test2 = Expect<Equal<type2 res2, string>>

}
