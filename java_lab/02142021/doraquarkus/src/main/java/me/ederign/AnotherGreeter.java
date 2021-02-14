package me.ederign;

import javax.enterprise.context.Dependent;

@Dependent
public class AnotherGreeter implements GreeterInterface {

    public String opinion() {
        return "ASDFG";
    }
}
