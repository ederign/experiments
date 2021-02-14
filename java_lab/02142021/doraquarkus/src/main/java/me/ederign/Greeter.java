package me.ederign;

import javax.enterprise.context.Dependent;

@Dependent
public class Greeter implements GreeterInterface {

    public String opinion() {
        return "ASDFG";
    }
}
