cmake_minimum_required(VERSION 3.15)
project(_ C)

set(CMAKE_C_STANDARD 99)

add_executable(LagrangePolynomial LagrangePolynomial.c)
add_executable(JordanMethod JordanMethod.c)
add_executable(systemOfEquations systemOfEquations.c)
add_executable(integrationAndDifferentiation  integrationAndDifferentiation.c)
add_executable(test test.c)
