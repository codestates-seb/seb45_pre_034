package com.preproject.stackoverflow.member.mapper;

import com.preproject.stackoverflow.member.dto.MemberPatchDto;
import com.preproject.stackoverflow.member.dto.SignupPostDto;
import com.preproject.stackoverflow.member.dto.LoginPostDto;
import com.preproject.stackoverflow.member.entity.SignupEntity;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper(componentModel = "spring")
public interface MemberMapper{
    SignupEntity signupPostDtoToMember(SignupPostDto signupPostDto);
    SignupEntity loginPostDtotoMember(LoginPostDto loginPostDto);
    SignupEntity memberPatchDtoToMember(MemberPatchDto memberPatchDto);


}